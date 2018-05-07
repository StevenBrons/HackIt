const makeTimeout = () => setTimeout(() => process.exit(), 15000);

const makeTimeBom = (ms) => {
  let timeoutRef = makeTimeout();

  return function timeBom (req, res, next) {
    clearTimeout(timeoutRef);
    timeoutRef = makeTimeout(ms);
    next();
  };
}

module.exports = makeTimeBom;
