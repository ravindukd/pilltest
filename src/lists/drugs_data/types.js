const { Text, Select } = require('@keystonejs/fields');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const { Content } = require('@keystonejs/fields-content');

const utils = require('../utils/utils')

module.exports = {
  schemaDoc: 'Types of Drugs',
  fields: {
    name: {
      type: Text,
      schemaDoc: 'The name of the type',
      adminDoc: 'The name of the type',
      isRequired: true
    },
    unit: {
      type: Text,
      schemaDoc: 'The unit of measurement',
      adminDoc: 'The unit of measurement',
      isRequired: true
    },
    state: {
      type: Text,
      schemaDoc: 'The state of the type',
      adminDoc: 'The state of the type'
    },
    route: {
      type: Text,
      schemaDoc: 'The route of the type',
      adminDoc: 'The route of the type'
    },
    site: {
      type: Text,
      schemaDoc: 'The route of the type',
      adminDoc: 'The route of the type'
    },
    uses: {
      type: Text,
      schemaDoc: 'The Uses of the type',
      adminDoc: 'The Uses of the type'
    },
  },
  access: {
    read: true,
    update: utils.access.userIsAdminOrOwner,
    create: utils.access.userIsAdmin,
    delete: utils.access.userIsAdmin,
  },
}