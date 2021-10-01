const { Text, Relationship } = require('@keystonejs/fields');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

const utils = require('../utils/utils')

module.exports = {
  schemaDoc: 'MOH Area',
  fields: {
    name: { 
      type: Text, 
      schemaDoc: 'How generally call this MOH Area?',
      adminDoc: 'How generally call this MOH Area?',
      isRequired: true,
    },
    slug: {
      type: Slug,
      from: 'name',
      schemaDoc: 'Url Segment to be displayed',
      adminDoc: 'Url Segment to be displayed',
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