const { Text, Relationship, Float,Select } = require('@keystonejs/fields');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const { adminDoc } = require('../../app/info');
const utils = require('../../utils/utils')

module.exports = {
  schemaDoc: 'Medicine Listing',
  fields: {
    country: { 
      type: Select, 
      options: utils.countries, 
      schemaDoc: 'Country of Origin' 
    },
    package_size: { 
      type: Float, 
      schemaDoc: 'Package Size' 
    },
    dosage: { 
      type: Float, 
      schemaDoc: 'Dosage' 
    },
    manufacturer: { 
      type: Relationship, 
      ref: 'Manufacturer', 
      schemaDoc: 'Manufacturer of this medicine' 
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
      schemaDoc: 'Brand of this medicine'
    },
    parent: { 
      type: Relationship, 
      ref: 'ProductMedicine', 
      schemaDoc: 'Parent of this medicine' 
    },
  },
  access: {
    read: true,
    update: true,
    create: utils.access.userIsAdmin,
    delete: utils.access.userIsAdmin,
  },
}