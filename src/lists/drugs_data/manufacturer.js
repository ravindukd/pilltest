const { Text, Select, Slug } = require('@keystonejs/fields');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const { Content } = require('@keystonejs/fields-content');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

const utils = require('../utils/utils')

module.exports = {
  schemaDoc: 'Manufacturer details',
  fields: {
    name: {
      type: Text,
      schemaDoc: 'How generally call this Manufacturer?',
      adminDoc: 'Name of this Manufacturer?',
      isRequired: true
    },
    slug: {
      type: Slug, 
      from: 'name',
      schemaDoc: 'Url Segment to be displayed',
      adminDoc: 'Url Segment to be displayed',
      isRequired: true
    },
    description: {
      type: Wysiwyg,
      schemaDoc: 'Description about this Manufacturer',
      adminDoc: 'Description about this Manufacturer',
      isRequired: true
    },
    country: {
      type: Select,
      options: utils.countries,
      schemaDoc: 'Country of Origin',
      adminDoc: 'Country of Origin',
    },
    image: {
      type: CloudinaryImage,
      adapter: utils.cldFileAdapter,
      adminDoc: 'Upload image from your computer',
      schemaDoc: 'Display Image for this Disease',
    },
  },
  access: {
    read: true,
    update: utils.access.userIsDrugAdmin,
    create: utils.access.userIsDrugAdmin,
    delete: utils.access.userIsDrugAdmin,
  },
}