const handler = require('./handler');
const { grpcMethods } = require('../../helpers/enumHelper');

const purchaseOrder = {
  [grpcMethods.CreateNewPurchaseOrder]: handler.createNewPurchaseOrder,
  [grpcMethods.FindOnePurchaseOrder]: handler.findOnePurchaseOrder,
};

module.exports = { purchaseOrder };
