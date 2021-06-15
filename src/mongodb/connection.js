const { connect } = require('mongoose');
const logger = require('../helpers/logger');
const customError = require('../helpers/customError');

const getConnctOptions = () => ({
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

const connectWithDataBase = async () => {
  try {
    const uri = process.env.MONGO_URL;
    const options = getConnctOptions();
    await connect(uri, options);
    logger.info('Banco de dados conectado com sucesso');
  } catch (error) {
    logger.error(error);
    throw customError.mongodb.errorConnectingToDataBase;
  }
};

module.exports = { connectWithDataBase };
