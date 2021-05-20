const { Text, Relationship,Checkbox } = require('@keystonejs/fields');
const utils = require('../../utils/utils')

module.exports =  {
  schemaDoc: 'Medicine',
  fields: {
    name: { type: 
      Text, 
      schemaDoc: 'The name of the Instrument', 
      isRequired: true
    },
    brand: { 
      type: Relationship, 
      ref: 'Brand', 
      schemaDoc: 'Brand of this medicine' 
    },
    type: { 
      type: Relationship, 
      ref: 'Type', 
      schemaDoc: 'Brand of this medicine'
    },
    isOTC: { 
      type: Checkbox, 
      isRequired: true
    },
    listing: { 
      type: Relationship,
      ref: 'ProductMedicineListing', 
      many: true, 
      schemaDoc: 'Listings of this medicine'
    },
  },
  access: {
    read: true,
    update: utils.access.userIsAdminOrOwner,
    create: utils.access.userIsAdmin,
    delete: utils.access.userIsAdmin,
  },
}