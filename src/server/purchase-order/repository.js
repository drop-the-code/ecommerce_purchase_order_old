const { Schema, model } = require('mongoose');

const getSchemaDefinition = () => ({
  total_price: { type: Schema.Types.Number, required: true, default: 0.0 },
  cliente: {
    id: { type: Schema.Types.Number, required: true, default: 1 },
    cpf: { type: Schema.Types.String, required: true, default: null },
  },
  products: [
    {
      id: { type: Schema.Types.Number, required: true, default: 1 },
      price: { type: Schema.Types.Number, required: true, default: 1 },
      name: { type: Schema.Types.String, required: true, default: null },
      product_supplier_cnpj: {
        type: Schema.Types.String,
        required: true,
        default: null,
      },
      description: { type: Schema.Types.String, required: true, default: null },
    },
  ],
});

const getSchema = (schemaDefinition) =>
  new Schema(schemaDefinition, { timestamps: true });

module.exports = model('PurchaseOrder', getSchema(getSchemaDefinition()));
