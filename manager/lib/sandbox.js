const { EventEmitter } = require("events");
const { spawn } = require('child_process');
const makeDebug = require('debug');

class Sandbox extends EventEmitter {
  async create() {
    this.uniqId = this._generateRandomPort();
    this.debug = makeDebug(`hackit:sandbox:${this.uniqId}`)

    this.names = {
      network: `challenge-nw-${this.uniqId}`,
      databaseContainer: `database-${this.uniqId}`,
      challengeContainer: `challenge-${this.uniqId}`,
    }

    this.debug('Setting up sandbox...');

    await this._createNetwork();
    await this._createDatabaseContainer();

    this.emit('created', this.uniqId);

    await this._runChallengeContainer();

    this.debug('Challenge container closed itself');

    await this._removeDatabaseContainer();
    await this._removeNetwork();
  }

  _generateRandomPort() {
    return (Math.floor(Math.random() * (19999 - 11111)) + 11111).toString();
  }

  async _createNetwork() {
    await this._execDocker(['network', 'create', this.names.network]);
  }

  async _removeNetwork() {
    await this._execDocker(['network', 'rm', this.names.network]);
  }

  async _createDatabaseContainer() {
    await this._execDocker([
      'run',
      '-d',
      '-e', 'MYSQL_ALLOW_EMPTY_PASSWORD=true',
      '--network', this.names.network,
      '--name', this.names.databaseContainer,
      'mysql'
    ]);
  }

  async _removeDatabaseContainer() {
    await this._execDocker(['stop', this.names.databaseContainer]);
    await this._execDocker(['rm', this.names.databaseContainer]);
  }

  async _runChallengeContainer() {
    await this._execDocker([
      'run',
      '--network', this.names.network,
      '--name', this.names.challengeContainer,
      '-p', `${this.uniqId}:80`,
      'challenge-xss',
    ]);
  }

  async _removeChallengeContainer() {
    await this._execDocker([
      'rm',
      this.names.challengeContainer,
    ]);
  }

  _execDocker(params) {
    return new Promise((resolve, reject) => {
      const docker = spawn('docker', params);

      docker.on('exit', (code) => {
        if (code == 0) {
          this.debug(`Docker command \`docker ${params.join(' ')}\` was successful`);
          resolve();
        } else {
          reject(`Docker command with params ${params} failed with exit code ${code}`);
        }
      });
    });
  }
}

module.exports = Sandbox;
