const { Select,Float, Relationship, Checkbox } = require('@keystonejs/fields');
const utils = require('../utils/utils')
const { atTracking } = require('@keystonejs/list-plugins');

module.exports = {
  schemaDoc: 'Payments',
  fields: {
    user: {
      type: Relationship,
      ref: 'User',
      schemaDoc: 'User'
    },
    status: { 
      type: Select, 
      options: 
      'RECEIVED, PROCESSING, PACKING, SHIPPED, COMPLETED, ERROR, CANCELLED, HOLDED' },
    total: {
      type: Float,
      schemaDoc: 'Total',
    },
    discount: {
      type: Float,
      schemaDoc: 'Discount',
    },
    fees: {
      type: Float,
      schemaDoc: 'Fees',
    },
    cartItems: {
      type: Relationship,
      ref: 'Cart',
      adminDoc: 'Cart Items of this Order',
      schemaDoc: 'Cart Items of this Order'
    },
  },
  access: {
    read: true,
    update: utils.access.userIsAdmin,
    create: utils.access.userIsAdmin,
    delete: utils.access.userIsAdmin,
  },
  plugins: [
    atTracking({ createdAtField: 'createdAt', format: 'dd/mm/yyyy hh:mm' }, { updatedAt: 'updatedAt', format: 'dd/mm/yyyy hh:mm' })
  ]
}