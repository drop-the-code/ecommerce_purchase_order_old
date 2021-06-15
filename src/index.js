const logger = require('./helpers/logger');
const { loadEnvVars } = require('./config');
const { connectWithDataBase } = require('./mongodb/connection');
const { createGrpcServer } = require('./server');

(async () => {
  try {
    loadEnvVars();
    await connectWithDataBase();
    createGrpcServer();
  } catch (error) {
    logger.error(error);
    logger.warn('Encerrando Servidor');
  }
})();
