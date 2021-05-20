const { Text, Relationship } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

const utils = require('../utils/utils')

module.exports = {
  schemaDoc: 'Medicines',
  adminDoc: 'Medicines',
  fields: {
    name: {
      type: Text,
      schemaDoc: 'The name of the medicine',
      adminDoc: 'The name of the medicine',
      isRequired: true
    },
    description: {
      type: Wysiwyg,
      schemaDoc: 'Description about this medicine',
      adminDoc: 'Description about this medicine',
      isRequired: true
    },
    uses: {
      type: Wysiwyg,
      schemaDoc: 'Uses of this medicine',
      adminDoc: 'Uses of this medicine',
    },
    contraindications: {
      type: Wysiwyg,
      schemaDoc: 'Contraindications of this medicine',
      adminDoc: 'Contraindications of this medicine'
    },
    side_effects: {
      type: Wysiwyg,
      schemaDoc: 'Side effects of this medicine',
      adminDoc: 'Side effects of this medicine',
    },
    allergies: {
      type: Wysiwyg,
      schemaDoc: 'Allergies of this medicine',
      adminDoc: 'Allergies of this medicine',
    },
    precautions: {
      type: Wysiwyg,
      schemaDoc: 'Precautions of this medicine',
      adminDoc: 'Precautions of this medicine',
    },
    interactions: {
      type: Wysiwyg,
      schemaDoc: 'Interactions of this medicine',
      adminDoc: 'Interactions of this medicine',
    },
    other: {
      type: Wysiwyg,
      schemaDoc: 'other details of this medicine',
      adminDoc: 'other details of this medicine',
    },
    sub_clinical: {
      type: Relationship,
      ref: 'SubClinical',
      many: true,
      schemaDoc: 'Sub clinical diseases related to this medicine',
      adminDoc: 'Sub clinical diseases related to this medicine',
    },
    clinical: {
      type: Relationship,
      ref: 'Clinical',
      many: true,
      schemaDoc: 'Clinical diseases related to this medicine',
      adminDoc: 'Clinical diseases related to this medicine',
    },
  },
  access: {
    read: true,
    update: utils.access.userIsAdminOrOwner,
    create: utils.access.userIsAdmin,
    delete: utils.access.userIsAdmin,
  },
}