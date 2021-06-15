const error = {};
const grpc = require('grpc');

error.dotenv = {
  errorOnLoadEnvVars: {
    errorCode: 'ENV0001',
    code: grpc.status.INTERNAL,
    message: 'Erro ao carregar variaveis de ambiente',
  },
};

error.mongodb = {
  errorConnectingToDataBase: {
    errorCode: 'MDB0001',
    code: grpc.status.INTERNAL,
    message: 'Erro ao conectar com o banco de dados',
  },
};

error.client = {
  validationError: {
    errorCode: 'CLI0001',
    code: grpc.status.INVALID_ARGUMENT,
    message: 'Ocorreu algum problema na validação dos dados',
  },
};

error.purchaseOrder = {
  errorOnCreateNewPurchaseOrder: {
    errorCode: 'PCO0001',
    code: grpc.status.FAILED_PRECONDITION,
    message: 'Erro ao criar nova ordem de pagamento',
  },
};

module.exports = error;
