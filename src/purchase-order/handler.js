const service = require('./service');
const customError = require('../helpers/customError');
const { grpcErrorHandler } = require('../helpers/grpcErrorHandler');

const isValidPayload = () => false;

const createNewPurchaseOrder = async (call, callback) => {
  try {
    if (!isValidPayload(call?.request?.payload)) {
      return grpcErrorHandler(customError.client.validationError, callback);
    }

    const created = await service.createNewPurchaseOrder(call.request.payload);
    return callback(null, { result: created });
  } catch (error) {
    return grpcErrorHandler(error, callback);
  }
};

const findOnePurchaseOrder = async (call, callback) => {
  try {
    if (!isValidPayload(call?.request?.payload)) {
      return grpcErrorHandler(customError.client.validationError, callback);
    }

    const purchaseOrder = await service.findOnePurchaseOrder(
      call.request.payload
    );

    if (!purchaseOrder?._id) {
      return grpcErrorHandler(
        customError.purchaseOrder.purchaseOrderNotFound,
        callback
      );
    }

    return callback(null, { result: purchaseOrder });
  } catch (error) {
    return grpcErrorHandler(error, callback);
  }
};

module.exports = { createNewPurchaseOrder, findOnePurchaseOrder };
