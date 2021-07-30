const { Text, Relationship, Float,Select, Checkbox } = require('@keystonejs/fields');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const utils = require('../../utils/utils')

module.exports = {
  schemaDoc: 'Instrument Listing',
  fields: {
    country: { 
      type: Select, 
      options: utils.countries, 
      schemaDoc: 'Country of Origin' 
    },
    manufacturer: { 
      type: Relationship, 
      ref: 'Manufacturer', 
      schemaDoc: 'Manufacturer of this Instrument'
    },
    special_delivery_required: { 
      type: Checkbox 
    },
    special_delivery_method: { 
      type: Text, 
      adminDoc: 'Special Delivery information if required.'
    },
    special_delivery_charge: {
      type: Text, 
      adminDoc: 'Special Delivery information if required.'
    },
    price: { 
      type: Float, 
      schemaDoc: 'Price' 
    },
    discount: { 
      type: Float, 
      schemaDoc: 'Discount' 
    },
    stock: { 
      type: 
      Float, 
      schemaDoc: 'Stock',
      adminDoc:'Set this to 0 to mark as OUT OF STOCK'
    },
    image: { 
      type: CloudinaryImage, 
      adapter: utils.cldFileAdapter 
    },
    brand: { 
      type: Relationship, 
      ref: 'Brand', 
      schemaDoc: 'Brand of this Instrument' 
    },
    parent: { 
      type: Relationship, 
      ref: 'ProductInstrument', 
      schemaDoc: 'Parent of this Instrument' 
    },
  },
  access: {
    read: true,
    update: utils.access.userIsAdminOrOwner,
    create: utils.access.userIsAdmin,
    delete: utils.access.userIsAdmin,
  },
};
