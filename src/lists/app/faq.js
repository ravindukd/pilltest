const { Text, Relationship, Checkbox, Password } = require('@keystonejs/fields');
const utils = require('../utils/utils')
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

module.exports = {
  schemaDoc:'FAQ',
  adminDoc:'FAQ',
  fields: {
    title: {
      type: Text,
      schemaDoc: 'Question',
      adminDoc: 'Question',
      isRequired: true
    },
    description: {
      type: Wysiwyg,
      schemaDoc: 'Answer',
      adminDoc: 'Answer',
      isRequired: true
    },
  },
  access: {
    read: true,
    update: utils.access.userIsDrugAdmin,
    create: utils.access.userIsDrugAdmin,
    delete: utils.access.userIsDrugAdmin,
  },
}