const clinical = require('./drugs_data/clinical')
const instrument = require('./drugs_data/instrument')
const manufacturer = require('./drugs_data/manufacturer')
const medicine = require('./drugs_data/medicine')
const subclinical = require('./drugs_data/subclinical')
const timing = require('./drugs_data/timing')
const types = require('./drugs_data/types')
const p_medicine = require('./pharma/products/medicine')
const p_instrument = require('./pharma/products/instrument')
const instrument_listing = require('./pharma/products/instrument_listing')
const medicine_listing = require('./pharma/products/medicine_listing')
const brands = require('./drugs_data/brands')
const user = require('./app/user')
const doctor_cat = require('./doctors/doctor_cat')
const cart = require('./pharma/cart')
const orders = require('./pharma/orders')

module.exports = {
  app: {
    user:user
  },
  drug_data: {
    instruments: instrument,
    medicine: medicine,
    brands:brands,
    clinical: clinical,
    subclinical: subclinical,
    manufacturer: manufacturer,
    types: types,
    timing: timing
  },
  pharma: {
    products: {
      medicine:p_medicine,
      instrument:p_instrument,
      instrument_listing: instrument_listing,
      medicine_listing: medicine_listing
    },
    selling: {
      cart:cart,
      orders:orders
    }
  },
  users:{
    doctors:{
      categories:doctor_cat
    }
  }
}