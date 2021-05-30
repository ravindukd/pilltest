const { Text, Relationship,Checkbox, Password } = require('@keystonejs/fields');
const utils = require('../utils/utils')

module.exports = {
  fields: {
    name: { 
      type: Text 
    },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: {
      type: Checkbox,
      access: {
        update: utils.access.userIsAdmin,
      },
    },
    isDrugAdmin: {
      type: Checkbox,
      access: {
        update: utils.access.userIsAdmin,
      },
    },
    isDoctor: {
      type: Checkbox,
      access: {
        update: utils.access.userIsAdmin,
      },
    },
    isPatient: {
      type: Checkbox,
      access: {
        update: utils.access.userIsAdmin,
      },
    },
    password: {
      type: Password,
    },
  },
  // List-level access controls
  access: {
    read: utils.access.userIsAdminOrOwner,
    update: utils.access.userIsAdminOrOwner,
    create: utils.access.userIsAdmin,
    delete: utils.access.userIsAdmin,
    auth: true,
  },
}