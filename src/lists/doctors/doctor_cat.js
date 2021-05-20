const { Text, Relationship } = require('@keystonejs/fields');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

const utils = require('../utils/utils')

module.exports = {
  schemaDoc: 'Doctor Categories',
  fields: {
    name: { 
      type: Text, 
      schemaDoc: 'How generally call this Category?',
      adminDoc: 'How generally call this Category?',
      isRequired: true,
    },
    image: { 
      type: CloudinaryImage, 
      adapter: utils.cldFileAdapter,
      adminDoc: 'Upload image from your computer',
    },
    description: {
      type: Wysiwyg,
      schemaDoc: 'Description about this category',
      adminDoc: 'Description about this category',
      isRequired: true
    },
  },
  access: {
    read: true,
    update: utils.access.userIsAdmin,
    create: utils.access.userIsAdmin,
    delete: utils.access.userIsAdmin,
  },
}