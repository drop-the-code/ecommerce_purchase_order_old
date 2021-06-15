const path = require('path');
const logger = require('../helpers/logger');
const customError = require('../helpers/customError');
const { loadSync } = require('@grpc/proto-loader');
const {
  loadPackageDefinition,
  Server,
  ServerCredentials,
} = require('@grpc/grpc-js');
const { purchaseOrder } = require('./purchase-order');

const getProtoBuffer = () => {
  try {
    logger.info('Carregando proto files');
    const pathToProtoFile = path.join(__dirname, 'proto/purchase-order.proto');
    const packageDefinition = loadSync(pathToProtoFile);
    const grpcObject = loadPackageDefinition(packageDefinition);
    return grpcObject;
  } catch (error) {
    logger.error(error);
    throw customError.grpc.errorOnLoadProtoFiles;
  }
};

const grpcServerOnStartHandler = (grpcServerInstance, address) => {
  return (error) => {
    if (error) {
      logger.error(error);
      throw customError.grpc.errorOnInitializeGrpcServer;
    }
    grpcServerInstance.start();
    logger.info(`Servidor gRPC rodando no endereço: ${address}`);
  };
};

const createGrpcServer = () => {
  try {
    logger.info('Iniciando Servidor gRPC');
    const grpcServerInstance = new Server();
    const { purchaseOrderPackagePb } = getProtoBuffer();
    const { purchaseOrderService } = purchaseOrderPackagePb;
    const { SERVER_IP, PORT } = process.env;
    const serverAddress = `${SERVER_IP}:${PORT}`;

    grpcServerInstance.addService(purchaseOrderService.service, purchaseOrder);
    grpcServerInstance.bindAsync(
      serverAddress,
      ServerCredentials.createInsecure(),
      grpcServerOnStartHandler(grpcServerInstance, serverAddress)
    );
  } catch (error) {
    logger.error(error);
    throw customError.grpc.errorOnInitializeGrpcServer;
  }
};

module.exports = { createGrpcServer };
