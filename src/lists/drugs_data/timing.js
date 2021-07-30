const { Text, Float } = require('@keystonejs/fields');

const utils = require('../utils/utils')

module.exports = {
  schemaDoc: 'Timing details',
  adminDoc: 'Timing details',
  fields: {
    name: { 
      type: Text, 
      schemaDoc: 'How generally call this timing?',
      adminDoc: 'How generally call this timing?' 
    },
    system_name: { 
      type: Text, 
      schemaDoc: 'How system should identify this timing?' ,
      adminDoc: 'How system should identify this timing?' 
    },
    totalPerDay: {
      type: Float, 
      schemaDoc: 'Amount that should be used for calculations' ,
      adminDoc: 'Amount that should be used for calculations' 
    },
    description: {
      type: Text,
      schemaDoc: 'Short description about this clinical timing',
      adminDoc: 'Short description about this clinical timing'
    },
  },
  access: {
    read: true,
    update: utils.access.userIsAdminOrOwner,
    create: utils.access.userIsAdmin,
    delete: utils.access.userIsAdmin,
  },
}