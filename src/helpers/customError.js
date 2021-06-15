const error = {};
error.dotenv = {
  errorOnLoadEnvVars: {
    code: 'ENV0001',
    message: 'Erro ao carregar variaveis de ambiente',
  },
};
error.mongodb = {
  errorConnectingToDataBase: {
    code: 'MDB0001',
    message: 'Erro ao conectar com o banco de dados',
  },
};

module.exports = error;
