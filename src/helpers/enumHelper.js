const enumHelper = {};

enumHelper.dotenv = {
  casesWhereVariablesAreNotLoaded: ['homolog', 'heroku'],
};

enumHelper.grpcMethods = {
  CreateNewPurchaseOrder: 'CreateNewPurchaseOrder',
  FindOnePurchaseOrder: 'FindOnePurchaseOrder',
  FindAllPurchaseOrderByUserId: 'FindAllPurchaseOrderByUserId',
};

module.exports = enumHelper;
