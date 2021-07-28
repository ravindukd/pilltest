const { Text, Relationship, Checkbox, Password } = require('@keystonejs/fields');
const utils = require('../utils/utils')
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

module.exports = {
  fields: {
    about_us: {
      type: Wysiwyg,
      schemaDoc: 'About Us information to be displayed',
      adminDoc: 'About Us information to be displayed',
      isRequired: true
    },
    privacy_policy: {
      type: Wysiwyg,
      schemaDoc: 'Privacy Policy to be displayed',
      adminDoc: 'Privacy Policy to be displayed',
      isRequired: true
    },
    payment_policy: {
      type: Wysiwyg,
      schemaDoc: 'Payment Policy to be displayed',
      adminDoc: 'Payment Policy to be displayed',
      isRequired: true
    },
    refund_policy: {
      type: Wysiwyg,
      schemaDoc: 'Refund Policy to be displayed',
      adminDoc: 'Refund Policy to be displayed',
      isRequired: true
    },
    terms: {
      type: Wysiwyg,
      schemaDoc: 'Terms to be displayed',
      adminDoc: 'Terms to be displayed',
      isRequired: true
    },
    facebook_url: {
      type: Text,
      schemaDoc: 'Social Links - Facebook',
      adminDoc: 'Social Links - Facebook',
      isRequired: true
    },
    twitter_url: {
      type: Text,
      schemaDoc: 'Social Links - twitter',
      adminDoc: 'Social Links - twitter',
      isRequired: true
    },
    instagram_url: {
      type: Text,
      schemaDoc: 'Social Links - instagram',
      adminDoc: 'Social Links - instagram',
      isRequired: true
    },
    google_business_url: {
      type: Text,
      schemaDoc: 'Social Links - google_business',
      adminDoc: 'Social Links - google_business',
      isRequired: true
    },
    public_email_address: {
      type: Text,
      schemaDoc: 'Public Contact Details - Email',
      adminDoc: 'Public Contact Details - Email',
      isRequired: true
    },
    public_contact_number: {
      type: Text,
      schemaDoc: 'Public Contact Details - Phone Number',
      adminDoc: 'Public Contact Details - Phone Number',
      isRequired: true
    },
    public_address: {
      type: Text,
      schemaDoc: 'Public Contact Details - Address',
      adminDoc: 'Public Contact Details - Address',
      isRequired: true
    },
  },
  // List-level access controls
  access: {
    read: true,
    update: utils.access.userIsAdminOrOwner,
    create: utils.access.userIsAdmin,
    delete: utils.access.userIsAdmin,
  },
}