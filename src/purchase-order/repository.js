const { Schema, model } = require('mongoose');

const getSchemaDefinition = () => ({});

const getSchema = (schemaDefinition) =>
  new Schema(schemaDefinition, { timestamps: true });

module.exports = model('PurchaseOrder', getSchema(getSchemaDefinition()));
