const path = require('path');
const dotenv = require('dotenv');
const enumHelper = require('../helpers/enumHelper');
const customError = require('../helpers/customError');
const logger = require('../helpers/logger');

const loadEnvVars = () => {
  try {
    const { NODE_ENV } = process.env;
    if (enumHelper.dotenv.casesWhereVariablesAreNotLoaded.includes(NODE_ENV))
      return;

    logger.info('Carregando variaveis de ambiente');
    const pathToFile = path.join(__dirname, '..', '..', '.env');
    dotenv.config({ path: pathToFile });
  } catch (error) {
    logger.error(error);
    throw 
  }
};
loadEnvVars();
