const repository = require('./repository');
const logger = require('../../helpers/logger');
const customError = require('../../helpers/customError');

const createNewPurchaseOrder = async (payload) => {
  try {
    const created = await repository.create(payload);
    logger.info(`Purchase order ${created._id} created`);
    return created;
  } catch (error) {
    logger.error(error);
    throw customError.purchaseOrder.errorOnCreateNewPurchaseOrder;
  }
};

const findOnePurchaseOrder = async (payload) => {
  try {
    const query = { _id: payload.id, id_user: payload.id_user };
    const purchaseOrder = await repository.findOne(query);
    return purchaseOrder;
  } catch (error) {
    logger.error(error);
    throw customError.purchaseOrder.failToFetchPurchaseOrder;
  }
};

module.exports = { createNewPurchaseOrder, findOnePurchaseOrder };
