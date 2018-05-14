const makeTimeout = (ms) => setTimeout(() => process.exit(), ms);

const makeTimeBom = (ms) => {
  let timeoutRef = makeTimeout(ms);

  return function timeBom (req, res, next) {
    clearTimeout(timeoutRef);
    timeoutRef = makeTimeout(ms);
    next();
  };
}

module.exports = makeTimeBom;
