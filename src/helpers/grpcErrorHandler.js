const createGrpcError = require('create-grpc-error');
const logger = require('./logger');

const grpcErrorHandler = (customError, callback) => {
  logger.warn(customError);
  const { message = '', code = 0 } = customError;
  const gprcError = createGrpcError(message, code);
  return callback(gprcError, { error: customError });
};

module.exports = { grpcErrorHandler };
