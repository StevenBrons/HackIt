const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const Sandbox = require('../lib/sandbox');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    challenges: [
      { id: 'sql', title: 'SQL-injections', description: 'Hacking into an unsecure database'},
      { id: 'xss', title: 'Cross-site scripting', description: 'Injecting malicious code into a website'},
    ],
  });
});

router.post('/start', async function (req, res, next) {
  const sandbox = new Sandbox();

  sandbox.on('created', (uniqId) => {
    res.end(`Container is running at http://localhost:${uniqId}/`);
  });

  sandbox.create();
});

module.exports = router;
