const { Float, Select, Relationship, Checkbox } = require('@keystonejs/fields');
const utils = require('../utils/utils')
const { atTracking } = require('@keystonejs/list-plugins');

module.exports = {
  schemaDoc: 'Cart',
  fields: {
    status: { 
      type: Select, 
      options: 
      'ACTIVE, INACTIVE' },
    user: {
      type: Relationship,
      ref: 'User',
      schemaDoc: 'User'
    },
    quantity: {
      type: Float,
      schemaDoc: 'Quantity'
    },
    price: {
      type: Float,
      schemaDoc: 'Price'
    },
    isMedicine: {
      type: Checkbox,
      schemaDoc: 'is a medicine or instrument',
      adminDoc: 'is a medicine or instrument'
    },
    medicine: {
      type: Relationship,
      ref: 'ProductMedicine',
      schemaDoc: 'Medicine'
    },
    instrument: {
      type: Relationship,
      ref: 'ProductInstrument',
      schemaDoc: 'Instrument'
    },
    m_listing: {
      type: Relationship,
      ref: 'ProductMedicineListing',
      schemaDoc: 'Listing of this medicine'
    },
    i_listing: {
      type: Relationship,
      ref: 'ProductMedicineListing',
      schemaDoc: 'Listing of this medicine'
    },
  },
  access: {
    read: true,
    update: utils.access.userIsAdmin,
    create: utils.access.userIsAdmin,
    delete: utils.access.userIsAdmin,
  },
  plugins: [
    atTracking({ createdAtField: 'createdAt', format: 'dd/mm/yyyy hh:mm' }, { updatedAt: 'updatedAt', format: 'dd/mm/yyyy hh:mm' }),
  ]
}