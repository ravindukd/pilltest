const { Text, Relationship, Checkbox, Password, Float } = require('@keystonejs/fields');
const utils = require('../utils/utils')
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

module.exports = {
    schemaDoc: 'Charges and Fees',
    adminDoc: 'Charges and Fees',
    fields: {
        bankProcessingFee: {
            type: Float,
            schemaDoc: 'Bank processing Fee to be charged',
            adminDoc: 'Bank processing Fee to be charged',
            isRequired: true
        },
        tax: {
            type: Float,
            schemaDoc: 'Tax to be charged',
            adminDoc: 'Tax to be charged',
            isRequired: true
        },
        sameDayDeliveryFee: {
            type: Float,
            schemaDoc: 'Same day delivery fee',
            adminDoc: 'Same day delivery fee',
            isRequired: true
        },
        nextDayDeliveryFee: {
            type: Float,
            schemaDoc: 'Same day delivery fee',
            adminDoc: 'Same day delivery fee',
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