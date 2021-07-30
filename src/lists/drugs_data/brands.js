const { Text, Relationship, Slug } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const { Content } = require('@keystonejs/fields-content');

const utils = require('../utils/utils')


module.exports = {
  schemaDoc: 'Brand details',
  fields: {
    name: { 
      type: Text, 
      schemaDoc: 'How generally call this brand?' 
    },
    slug: {
      type: Slug, 
      from: 'name',
      schemaDoc: 'Url Segment to be displayed',
      adminDoc: 'Url Segment to be displayed',
      isRequired: true
    },
    medicines: { 
      type: Relationship, 
      ref: 'Medicine', 
      many: true, 
      schemaDoc: 'The medicines of this brand' 
    },
    instruments: { 
      type: Relationship, 
      ref: 'Instrument', 
      many: true, 
      schemaDoc: 'The instruments of this brand' 
    },
    description: {
      type: Wysiwyg,
      schemaDoc: 'Description about this clinical brand'
    },
    timing: { 
      type: Relationship, 
      ref: 'Timing', 
      many: true, 
      schemaDoc: 'Timing details for this brand'
    },
    sub_clinical: { 
      type: Relationship, 
      ref: 'SubClinical', 
      many: true, 
      schemaDoc: 'Sub clinical diseases related to this medicine'
    },
    clinical: { 
      type: Relationship,
      ref: 'Clinical',
      many: true,
      schemaDoc: 'Clinical diseases related to this medicine'
    },
  },
  access: {
    read: true,
    update: utils.access.userIsAdminOrOwner,
    create: utils.access.userIsAdmin,
    delete: utils.access.userIsAdmin,
  },
}