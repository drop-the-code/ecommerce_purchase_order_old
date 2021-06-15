const enumHelper = {};

enumHelper.dotenv = {
  casesWhereVariablesAreNotLoaded: ['homolog', 'heroku'],
};

enumHelper.grpcMethods = {
  CreateNewPurchaseOrder: 'CreateNewPurchaseOrder',
  FindOnePurchaseOrder: 'FindOnePurchaseOrder',
  FindAllPurchaseOrder: 'FindAllPurchaseOrder',
};

module.exports = enumHelper;
