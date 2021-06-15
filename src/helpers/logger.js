const simpleNodeLogger = require('simple-node-logger');

const logger = simpleNodeLogger.createSimpleLogger({
  timestampFormat: 'YYYY-MM-DD HH:mm:ss,SSS',
});

module.exports = logger;
