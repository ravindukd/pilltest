const { Text, Relationship } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

const utils = require('../utils/utils')

module.exports = {
  schemaDoc: 'Instruments',
  adminDoc: 'Instruments',
  fields: {
    name: {
      type: Text,
      schemaDoc: 'The name of the Instrument',
      adminDoc: 'The name of the Instrument',
      isRequired: true
    },
    description: {
      type: Wysiwyg,
      schemaDoc: 'Description about this Instrument',
      adminDoc: 'Description about this Instrument',
      isRequired: true
    },
    uses: {
      type: Wysiwyg,
      schemaDoc: 'Uses of this Instrument',
      adminDoc: 'Uses of this Instrument',
    },
    other: {
      type: Wysiwyg,
      schemaDoc: 'other details of this Instrument',
      adminDoc: 'other details of this Instrument',
    },
    sub_clinical: {
      type: Relationship,
      ref: 'SubClinical',
      many: true,
      schemaDoc: 'Sub clinical diseases related to this Instrument',
      adminDoc: 'Sub clinical diseases related to this Instrument',
    },
    clinical: {
      type: Relationship,
      ref: 'Clinical',
      many: true,
      schemaDoc: 'Clinical diseases related to this Instrument',
      adminDoc: 'Clinical diseases related to this Instrument',
    },
  },
  access: {
    read: true,
    update: utils.access.userIsAdminOrOwner,
    create: utils.access.userIsAdmin,
    delete: utils.access.userIsAdmin,
  },
}