const { Text, Relationship, Checkbox, Password } = require('@keystonejs/fields');
const utils = require('../utils/utils')
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

module.exports = {
  schemaDoc:'Website Info',
  adminDoc:'Website Info',
  fields: {
    aboutUs: {
      type: Wysiwyg,
      schemaDoc: 'About Us information to be displayed',
      adminDoc: 'About Us information to be displayed',
      isRequired: true
    },
    privacyPolicy: {
      type: Wysiwyg,
      schemaDoc: 'Privacy Policy to be displayed',
      adminDoc: 'Privacy Policy to be displayed',
      isRequired: true
    },
    paymentPolicy: {
      type: Wysiwyg,
      schemaDoc: 'Payment Policy to be displayed',
      adminDoc: 'Payment Policy to be displayed',
      isRequired: true
    },
    refundPolicy: {
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
    facebookUrl: {
      type: Text,
      schemaDoc: 'Social Links - Facebook',
      adminDoc: 'Social Links - Facebook',
      isRequired: true
    },
    twitterUrl: {
      type: Text,
      schemaDoc: 'Social Links - twitter',
      adminDoc: 'Social Links - twitter',
      isRequired: true
    },
    instagramUrl: {
      type: Text,
      schemaDoc: 'Social Links - instagram',
      adminDoc: 'Social Links - instagram',
      isRequired: true
    },
    google_businessUrl: {
      type: Text,
      schemaDoc: 'Social Links - google_business',
      adminDoc: 'Social Links - google_business',
      isRequired: true
    },
    public_emailAddress: {
      type: Text,
      schemaDoc: 'Public Contact Details - Email',
      adminDoc: 'Public Contact Details - Email',
      isRequired: true
    },
    public_contactNumber: {
      type: Text,
      schemaDoc: 'Public Contact Details - Phone Number',
      adminDoc: 'Public Contact Details - Phone Number',
      isRequired: true
    },
    publicAddress: {
      type: Text,
      schemaDoc: 'Public Contact Details - Address',
      adminDoc: 'Public Contact Details - Address',
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