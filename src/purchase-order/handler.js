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

    if (purchaseOrder && purchaseOrder._id) {
      return callback(null, { result: purchaseOrder });
    }

    return grpcErrorHandler(
      customError.purchaseOrder.purchaseOrderNotFound,
      callback
    );
  } catch (error) {
    return grpcErrorHandler(error, callback);
  }
};

module.exports = { createNewPurchaseOrder, findOnePurchaseOrder };
