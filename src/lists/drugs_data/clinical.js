const { Text, Select } = require('@keystonejs/fields');
const { Unsplash } = require('@keystonejs/fields-unsplash');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const { Content } = require('@keystonejs/fields-content');

const utils = require('../utils/utils')

module.exports = {
  schemaDoc: 'Clinical details',
  fields: {
    name: {
      type: Text,
      schemaDoc: 'How generally call this Disease?',
      adminDoc: 'The name of this Disease.',
      isRequired: true,
    },
    uimage: {
      type: Unsplash,
      accessKey: utils.keys.UNSPLASH_accessKey,
      secretKey: utils.keys.UNSPLASH_secretKey,
      adminDoc: 'Unsplash Image ID (goto unsplash.com and copy id from a image URL'
    },
    cimage: {
      type: CloudinaryImage, 
      adapter: utils.cldFileAdapter,
      schemaDoc: 'Display Image for this Disease',
      adminDoc: 'Upload image from your computer',
    },
    description: {
      type: Content,
      blocks: [
        Content.blocks.heading,
        [
          Unsplash.blocks.unsplashImage,
          {
            attribution: 'KeystoneJS',
            accessKey: utils.keys.UNSPLASH_accessKey,
            secretKey: utils.keys.UNSPLASH_secretKey,
          },
        ],
        [CloudinaryImage.blocks.image, { adapter: utils.cldFileAdapter }],
        Content.blocks.blockquote,
        Content.blocks.link,
        Content.blocks.orderedList,
        Content.blocks.unorderedList,
      ],
      schemaDoc: 'Description about this clinical Disease',
      adminDoc: 'Description about this clinical Disease'
    },
  },
  access: {
    read: true,
    update: utils.access.userIsDrugAdmin,
    create: utils.access.userIsDrugAdmin,
    delete: utils.access.userIsDrugAdmin,
  },
}