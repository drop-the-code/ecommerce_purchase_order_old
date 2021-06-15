const handler = require('./handler');
const { grpcMethods } = require('../helpers/enumHelper');

module.exports = {
  [grpcMethods.CreateNewPurchaseOrder]: handler.createNewPurchaseOrder,
  [grpcMethods.FindOnePurchaseOrder]: handler.findOnePurchaseOrder,
};
