const logger = require('./helpers/logger');
const { loadEnvVars } = require('./config');
const { connectWithDataBase } = require('./mongodb/connection');

(async () => {
  try {
    loadEnvVars();
    await connectWithDataBase();
    logger.info('Aplicacao inicializada');
  } catch (error) {
    logger.error(error);
    logger.warn('Encerrando Servidor');
    process.exit(1);
  }
})();
