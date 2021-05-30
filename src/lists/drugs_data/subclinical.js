const { Text, Relationship } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');

const utils = require('../utils/utils')

module.exports = {
  schemaDoc: 'Sub Clinical Details',
  adminDoc: 'Sub Clinical Details',
  fields: {
    name: { 
      type: Text, 
      schemaDoc: 'How generally call this desease?' ,
      isRequired: true
    },
    description: {
      type: Wysiwyg,
      schemaDoc: 'Description about this clinical desease',
      adminDoc: 'Description about this clinical desease',
      isRequired: true
    },
    image: { 
      type: CloudinaryImage, 
      adapter: utils.cldFileAdapter,
      adminDoc: 'Upload image from your computer',
    },
    causes: {
      type: Wysiwyg,
      schemaDoc: 'Causes about this sub clinical desease',
      adminDoc: 'Causes about this sub clinical desease',
    },
    symptoms: {
      type: Wysiwyg,
      schemaDoc: 'Symptoms about this sub clinical desease',
      adminDoc: 'Symptoms about this sub clinical desease',
    },
    treatments: {
      type: Wysiwyg,
      schemaDoc: 'Treatments about this sub clinical desease',
      adminDoc: 'Treatments about this sub clinical desease',
    },
    notes: {
      type: Wysiwyg,
      schemaDoc: 'Notes about this sub clinical desease',
      adminDoc: 'Notes about this sub clinical desease',
    },
    clinical: { 
      type: Relationship, 
      ref: 'Clinical',
      many: true, 
      schemaDoc: 'The Clinical Desease of this Sub Clinical Desease',
      adminDoc: 'The Clinical Desease of this Sub Clinical Desease'
    },
  },
  access: {
    read: true,
    update: utils.access.userIsAdminOrOwner,
    create: utils.access.userIsAdmin,
    delete: utils.access.userIsAdmin,
  },
}