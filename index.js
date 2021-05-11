const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { Checkbox, Text, Relationship, Float, Password, Select } = require('@keystonejs/fields');
const { Unsplash } = require('@keystonejs/fields-unsplash');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');


const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'Pillpack.lk';
const adapterConfig = { mongoUri: 'mongodb://localhost/pillpack' };
const UNSPLASH_accessKey = 'VVaFnWU0c-PwpTRVdhTmq3orWetmbApkU5WqvSas8a0';
const UNSPLASH_secretKey = '4TBtpcvVRoApG7hhM73LsV2muuv7HG5TMoyvO37tB88';



const country = [
  { "label": "Afghanistan", "value": "AF" },
  { "label": "land Islands", "value": "AX" },
  { "label": "Albania", "value": "AL" },
  { "label": "Algeria", "value": "DZ" },
  { "label": "American Samoa", "value": "AS" },
  { "label": "AndorrA", "value": "AD" },
  { "label": "Angola", "value": "AO" },
  { "label": "Anguilla", "value": "AI" },
  { "label": "Antarctica", "value": "AQ" },
  { "label": "Antigua and Barbuda", "value": "AG" },
  { "label": "Argentina", "value": "AR" },
  { "label": "Armenia", "value": "AM" },
  { "label": "Aruba", "value": "AW" },
  { "label": "Australia", "value": "AU" },
  { "label": "Austria", "value": "AT" },
  { "label": "Azerbaijan", "value": "AZ" },
  { "label": "Bahamas", "value": "BS" },
  { "label": "Bahrain", "value": "BH" },
  { "label": "Bangladesh", "value": "BD" },
  { "label": "Barbados", "value": "BB" },
  { "label": "Belarus", "value": "BY" },
  { "label": "Belgium", "value": "BE" },
  { "label": "Belize", "value": "BZ" },
  { "label": "Benin", "value": "BJ" },
  { "label": "Bermuda", "value": "BM" },
  { "label": "Bhutan", "value": "BT" },
  { "label": "Bolivia", "value": "BO" },
  { "label": "Bosnia and Herzegovina", "value": "BA" },
  { "label": "Botswana", "value": "BW" },
  { "label": "Bouvet Island", "value": "BV" },
  { "label": "Brazil", "value": "BR" },
  { "label": "British Indian Ocean Territory", "value": "IO" },
  { "label": "Brunei Darussalam", "value": "BN" },
  { "label": "Bulgaria", "value": "BG" },
  { "label": "Burkina Faso", "value": "BF" },
  { "label": "Burundi", "value": "BI" },
  { "label": "Cambodia", "value": "KH" },
  { "label": "Cameroon", "value": "CM" },
  { "label": "Canada", "value": "CA" },
  { "label": "Cape Verde", "value": "CV" },
  { "label": "Cayman Islands", "value": "KY" },
  { "label": "Central African Republic", "value": "CF" },
  { "label": "Chad", "value": "TD" },
  { "label": "Chile", "value": "CL" },
  { "label": "China", "value": "CN" },
  { "label": "Christmas Island", "value": "CX" },
  { "label": "Cocos (Keeling) Islands", "value": "CC" },
  { "label": "Colombia", "value": "CO" },
  { "label": "Comoros", "value": "KM" },
  { "label": "Congo", "value": "CG" },
  { "label": "Congo, The Democratic Republic of the", "value": "CD" },
  { "label": "Cook Islands", "value": "CK" },
  { "label": "Costa Rica", "value": "CR" },
  { "label": "Croatia", "value": "HR" },
  { "label": "Cuba", "value": "CU" },
  { "label": "Cyprus", "value": "CY" },
  { "label": "Czech Republic", "value": "CZ" },
  { "label": "Denmark", "value": "DK" },
  { "label": "Djibouti", "value": "DJ" },
  { "label": "Dominica", "value": "DM" },
  { "label": "Dominican Republic", "value": "DO" },
  { "label": "Ecuador", "value": "EC" },
  { "label": "Egypt", "value": "EG" },
  { "label": "El Salvador", "value": "SV" },
  { "label": "Equatorial Guinea", "value": "GQ" },
  { "label": "Eritrea", "value": "ER" },
  { "label": "Estonia", "value": "EE" },
  { "label": "Ethiopia", "value": "ET" },
  { "label": "Falkland Islands (Malvinas)", "value": "FK" },
  { "label": "Faroe Islands", "value": "FO" },
  { "label": "Fiji", "value": "FJ" },
  { "label": "Finland", "value": "FI" },
  { "label": "France", "value": "FR" },
  { "label": "French Guiana", "value": "GF" },
  { "label": "French Polynesia", "value": "PF" },
  { "label": "French Southern Territories", "value": "TF" },
  { "label": "Gabon", "value": "GA" },
  { "label": "Gambia", "value": "GM" },
  { "label": "Georgia", "value": "GE" },
  { "label": "Germany", "value": "DE" },
  { "label": "Ghana", "value": "GH" },
  { "label": "Gibraltar", "value": "GI" },
  { "label": "Greece", "value": "GR" },
  { "label": "Greenland", "value": "GL" },
  { "label": "Grenada", "value": "GD" },
  { "label": "Guadeloupe", "value": "GP" },
  { "label": "Guam", "value": "GU" },
  { "label": "Guatemala", "value": "GT" },
  { "label": "Guernsey", "value": "GG" },
  { "label": "Guinea", "value": "GN" },
  { "label": "Guinea-Bissau", "value": "GW" },
  { "label": "Guyana", "value": "GY" },
  { "label": "Haiti", "value": "HT" },
  { "label": "Heard Island and Mcdonald Islands", "value": "HM" },
  { "label": "Holy See (Vatican City State)", "value": "VA" },
  { "label": "Honduras", "value": "HN" },
  { "label": "Hong Kong", "value": "HK" },
  { "label": "Hungary", "value": "HU" },
  { "label": "Iceland", "value": "IS" },
  { "label": "India", "value": "IN" },
  { "label": "Indonesia", "value": "ID" },
  { "label": "Iran, Islamic Republic Of", "value": "IR" },
  { "label": "Iraq", "value": "IQ" },
  { "label": "Ireland", "value": "IE" },
  { "label": "Isle of Man", "value": "IM" },
  { "label": "Israel", "value": "IL" },
  { "label": "Italy", "value": "IT" },
  { "label": "Jamaica", "value": "JM" },
  { "label": "Japan", "value": "JP" },
  { "label": "Jersey", "value": "JE" },
  { "label": "Jordan", "value": "JO" },
  { "label": "Kazakhstan", "value": "KZ" },
  { "label": "Kenya", "value": "KE" },
  { "label": "Kiribati", "value": "KI" },
  { "label": "Korea, Republic of", "value": "KR" },
  { "label": "Kuwait", "value": "KW" },
  { "label": "Kyrgyzstan", "value": "KG" },
  { "label": "Latvia", "value": "LV" },
  { "label": "Lebanon", "value": "LB" },
  { "label": "Lesotho", "value": "LS" },
  { "label": "Liberia", "value": "LR" },
  { "label": "Libyan Arab Jamahiriya", "value": "LY" },
  { "label": "Liechtenstein", "value": "LI" },
  { "label": "Lithuania", "value": "LT" },
  { "label": "Luxembourg", "value": "LU" },
  { "label": "Macao", "value": "MO" },
  { "label": "Macedonia, The Former Yugoslav Republic of", "value": "MK" },
  { "label": "Madagascar", "value": "MG" },
  { "label": "Malawi", "value": "MW" },
  { "label": "Malaysia", "value": "MY" },
  { "label": "Maldives", "value": "MV" },
  { "label": "Mali", "value": "ML" },
  { "label": "Malta", "value": "MT" },
  { "label": "Marshall Islands", "value": "MH" },
  { "label": "Martinique", "value": "MQ" },
  { "label": "Mauritania", "value": "MR" },
  { "label": "Mauritius", "value": "MU" },
  { "label": "Mayotte", "value": "YT" },
  { "label": "Mexico", "value": "MX" },
  { "label": "Micronesia, Federated States of", "value": "FM" },
  { "label": "Moldova, Republic of", "value": "MD" },
  { "label": "Monaco", "value": "MC" },
  { "label": "Mongolia", "value": "MN" },
  { "label": "Montenegro", "value": "ME" },
  { "label": "Montserrat", "value": "MS" },
  { "label": "Morocco", "value": "MA" },
  { "label": "Mozambique", "value": "MZ" },
  { "label": "Myanmar", "value": "MM" },
  { "label": "Namibia", "value": "NA" },
  { "label": "Nauru", "value": "NR" },
  { "label": "Nepal", "value": "NP" },
  { "label": "Netherlands", "value": "NL" },
  { "label": "Netherlands Antilles", "value": "AN" },
  { "label": "New Caledonia", "value": "NC" },
  { "label": "New Zealand", "value": "NZ" },
  { "label": "Nicaragua", "value": "NI" },
  { "label": "Niger", "value": "NE" },
  { "label": "Nigeria", "value": "NG" },
  { "label": "Niue", "value": "NU" },
  { "label": "Norfolk Island", "value": "NF" },
  { "label": "Northern Mariana Islands", "value": "MP" },
  { "label": "Norway", "value": "NO" },
  { "label": "Oman", "value": "OM" },
  { "label": "Pakistan", "value": "PK" },
  { "label": "Palau", "value": "PW" },
  { "label": "Palestinian Territory, Occupied", "value": "PS" },
  { "label": "Panama", "value": "PA" },
  { "label": "Papua New Guinea", "value": "PG" },
  { "label": "Paraguay", "value": "PY" },
  { "label": "Peru", "value": "PE" },
  { "label": "Philippines", "value": "PH" },
  { "label": "Pitcairn", "value": "PN" },
  { "label": "Poland", "value": "PL" },
  { "label": "Portugal", "value": "PT" },
  { "label": "Puerto Rico", "value": "PR" },
  { "label": "Qatar", "value": "QA" },
  { "label": "Reunion", "value": "RE" },
  { "label": "Romania", "value": "RO" },
  { "label": "Russian Federation", "value": "RU" },
  { "label": "RWANDA", "value": "RW" },
  { "label": "Saint Helena", "value": "SH" },
  { "label": "Saint Kitts and Nevis", "value": "KN" },
  { "label": "Saint Lucia", "value": "LC" },
  { "label": "Saint Pierre and Miquelon", "value": "PM" },
  { "label": "Saint Vincent and the Grenadines", "value": "VC" },
  { "label": "Samoa", "value": "WS" },
  { "label": "San Marino", "value": "SM" },
  { "label": "Sao Tome and Principe", "value": "ST" },
  { "label": "Saudi Arabia", "value": "SA" },
  { "label": "Senegal", "value": "SN" },
  { "label": "Serbia", "value": "RS" },
  { "label": "Seychelles", "value": "SC" },
  { "label": "Sierra Leone", "value": "SL" },
  { "label": "Singapore", "value": "SG" },
  { "label": "Slovakia", "value": "SK" },
  { "label": "Slovenia", "value": "SI" },
  { "label": "Solomon Islands", "value": "SB" },
  { "label": "Somalia", "value": "SO" },
  { "label": "South Africa", "value": "ZA" },
  { "label": "South Georgia and the South Sandwich Islands", "value": "GS" },
  { "label": "Spain", "value": "ES" },
  { "label": "Sri Lanka", "value": "LK" },
  { "label": "Sudan", "value": "SD" },
  { "label": "Surilabel", "value": "SR" },
  { "label": "Svalbard and Jan Mayen", "value": "SJ" },
  { "label": "Swaziland", "value": "SZ" },
  { "label": "Sweden", "value": "SE" },
  { "label": "Switzerland", "value": "CH" },
  { "label": "Syrian Arab Republic", "value": "SY" },
  { "label": "Taiwan, Province of China", "value": "TW" },
  { "label": "Tajikistan", "value": "TJ" },
  { "label": "Tanzania, United Republic of", "value": "TZ" },
  { "label": "Thailand", "value": "TH" },
  { "label": "Timor-Leste", "value": "TL" },
  { "label": "Togo", "value": "TG" },
  { "label": "Tokelau", "value": "TK" },
  { "label": "Tonga", "value": "TO" },
  { "label": "Trinidad and Tobago", "value": "TT" },
  { "label": "Tunisia", "value": "TN" },
  { "label": "Turkey", "value": "TR" },
  { "label": "Turkmenistan", "value": "TM" },
  { "label": "Turks and Caicos Islands", "value": "TC" },
  { "label": "Tuvalu", "value": "TV" },
  { "label": "Uganda", "value": "UG" },
  { "label": "Ukraine", "value": "UA" },
  { "label": "United Arab Emirates", "value": "AE" },
  { "label": "United Kingdom", "value": "GB" },
  { "label": "United States", "value": "US" },
  { "label": "United States Minor Outlying Islands", "value": "UM" },
  { "label": "Uruguay", "value": "UY" },
  { "label": "Uzbekistan", "value": "UZ" },
  { "label": "Vanuatu", "value": "VU" },
  { "label": "Venezuela", "value": "VE" },
  { "label": "Viet Nam", "value": "VN" },
  { "label": "Virgin Islands, British", "value": "VG" },
  { "label": "Virgin Islands, U.S.", "value": "VI" },
  { "label": "Wallis and Futuna", "value": "WF" },
  { "label": "Western Sahara", "value": "EH" },
  { "label": "Yemen", "value": "YE" },
  { "label": "Zambia", "value": "ZM" },
  { "label": "Zimbabwe", "value": "ZW" }
]



const cldFileAdapter = new CloudinaryAdapter({
  cloudName: 'pillpacklk',
  apiKey: '562426265463471',
  apiSecret: 'SxtKe9vL9qeH9KofRjJCDTXv8Is',
  folder: 'drug_data',
});


const { Content } = require('@keystonejs/fields-content');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const initialiseData = require('./initial-data');


cookie = {
  secure:false, // Defaults to true in production
  maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
  sameSite: false,
};

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
  cookie:cookie,
  cookieSecret: 'pillpackgql'
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

keystone.createList('User', {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: {
      type: Checkbox,
      // Field-level access controls
      // Here, we set more restrictive field access so a non-admin cannot make themselves admin.
      access: {
        update: access.userIsAdmin,
      },
    },
    password: {
      type: Password,
    },
  },
  // List-level access controls
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});


keystone.createList('Brand', {
  schemaDoc: 'Brand details',
  fields: {
    name: { type: Text, schemaDoc: 'How generally call this brand?' },
    medicines: { type: Relationship, ref: 'Medicine', many: true, schemaDoc: 'The medicines of this brand' },
    instruments: { type: Relationship, ref: 'Instrument', many: true, schemaDoc: 'The instruments of this brand' },
    description: {
      type: Content,
      type: Wysiwyg,
      schemaDoc: 'Description about this clinical brand'
    },
    timing: { type: Relationship, ref: 'Timing', many: true, schemaDoc: 'Timing details for this brand' },
    sub_clinical: { type: Relationship, ref: 'SubClinical', many: true, schemaDoc: 'Sub clinical diseases related to this medicine' },
    clinical: { type: Relationship, ref: 'Clinical', many: true, schemaDoc: 'Clinical diseases related to this medicine' },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList('ProductInstrument', {
  schemaDoc: 'Instruments',
  fields: {
    name: { type: Text, schemaDoc: 'The name of the Instrument', isRequired: true },
    brand: { type: Relationship, ref: 'Brand', schemaDoc: 'Brand of this medicine' },
    type: { type: Relationship, ref: 'Type', schemaDoc: 'Brand of this medicine' },
    isOTC: { type: Checkbox, isRequired: true },
    listing: { type: Relationship, ref: 'ProductInstrumentListing', many: true, schemaDoc: 'Listings of this medicine', adminDoc: '' },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList('ProductMedicine', {
  schemaDoc: 'Medicine',
  fields: {
    name: { type: Text, schemaDoc: 'The name of the Instrument', isRequired: true },
    brand: { type: Relationship, ref: 'Brand', schemaDoc: 'Brand of this medicine' },
    type: { type: Relationship, ref: 'Type', schemaDoc: 'Brand of this medicine' },
    isOTC: { type: Checkbox, isRequired: true },
    listing: { type: Relationship, ref: 'ProductMedicineListing', many: true, schemaDoc: 'Listings of this medicine' },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList('ProductMedicineListing', {
  schemaDoc: 'Medicine Listing',
  fields: {
    country: { type: Select, options: country, schemaDoc: 'Country of Origin' },
    package_size: { type: Float, schemaDoc: 'Package Size' },
    dosage: { type: Float, schemaDoc: 'Dosage' },
    manufacturer: { type: Relationship, ref: 'Manufacturer', schemaDoc: 'Manufacturer of this medicine' },
    price: { type: Float, schemaDoc: 'Price' },
    stock: { type: Float, schemaDoc: 'Stock' },
    image: { type: CloudinaryImage, adapter: cldFileAdapter },
    brand: { type: Relationship, ref: 'Brand', schemaDoc: 'Brand of this medicine' },
    parent: { type: Relationship, ref: 'ProductMedicine', schemaDoc: 'Parent of this medicine' },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});


keystone.createList('ProductInstrumentListing', {
  schemaDoc: 'Instrument Listing',
  fields: {
    country: { type: Select, options: country, schemaDoc: 'Country of Origin' },
    manufacturer: { type: Relationship, ref: 'Manufacturer', schemaDoc: 'Manufacturer of this Instrument' },
    special_delivery_required: { type: Checkbox },
    special_delivery_method: { type: Text, adminDoc: 'Special Delivery information if required.' },
    special_delivery_charge: { type: Text, adminDoc: 'Special Delivery information if required.' },
    price: { type: Float, schemaDoc: 'Price' },
    stock: { type: Float, schemaDoc: 'Stock' },
    image: { type: CloudinaryImage, adapter: cldFileAdapter },
    brand: { type: Relationship, ref: 'Brand', schemaDoc: 'Brand of this Instrument' },
    parent: { type: Relationship, ref: 'ProductInstrument', schemaDoc: 'Parent of this Instrument' },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList('Instrument', {
  schemaDoc: 'Instruments',
  fields: {
    name: { type: Text, schemaDoc: 'The name of the Instrument', isRequired: true },
    description: {
      type: Wysiwyg,
      schemaDoc: 'Description about this Instrument',
      isRequired: true
    },
    uses: {
      type: Wysiwyg,
      schemaDoc: 'Uses of this Instrument'
    },
    other: {
      type: Wysiwyg,
      schemaDoc: 'other details of this Instrument'
    },
    sub_clinical: { type: Relationship, ref: 'SubClinical', many: true, schemaDoc: 'Sub clinical diseases related to this Instrument' },
    clinical: { type: Relationship, ref: 'Clinical', many: true, schemaDoc: 'Clinical diseases related to this Instrument' },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList('Medicine', {
  schemaDoc: 'Medicine Brands',
  fields: {
    name: { type: Text, schemaDoc: 'The name of the medicine', isRequired: true },
    description: {
      type: Wysiwyg,
      schemaDoc: 'Description about this medicine',
      isRequired: true
    },

    uses: {
      type: Wysiwyg,
      schemaDoc: 'Uses of this medicine'
    },

    contraindications: {
      type: Wysiwyg,
      schemaDoc: 'Contraindications of this medicine'
    },

    side_effects: {
      type: Wysiwyg,
      schemaDoc: 'Side effects of this medicine'
    },
    allergies: {
      type: Wysiwyg,
      schemaDoc: 'Allergies of this medicine'
    },
    precautions: {
      type: Wysiwyg,
      schemaDoc: 'Precautions of this medicine'
    },
    interactions: {
      type: Wysiwyg,
      schemaDoc: 'Interactions of this medicine'
    },
    other: {
      type: Wysiwyg,
      schemaDoc: 'other details of this medicine'
    },
    sub_clinical: { type: Relationship, ref: 'SubClinical', many: true, schemaDoc: 'Sub clinical diseases related to this medicine' },
    clinical: { type: Relationship, ref: 'Clinical', many: true, schemaDoc: 'Clinical diseases related to this medicine' },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList('Timing', {
  schemaDoc: 'Timing details',
  fields: {
    name: { type: Text, schemaDoc: 'How generally call this timing?' },
    system_name: { type: Text, schemaDoc: 'How system should identify this timing?' },
    description: {
      type: Text,
      schemaDoc: 'Short escription about this clinical timing'
    },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList('SubClinical', {
  schemaDoc: 'Sub Clinical details',
  fields: {
    name: { type: Text, schemaDoc: 'How generally call this desease?' },
    description: {
      type: Wysiwyg,
      schemaDoc: 'Description about this clinical desease'
    },
    causes: {
      type: Wysiwyg,
      schemaDoc: 'Causes about this sub clinical desease'
    },
    causes: {
      type: Wysiwyg,
      schemaDoc: 'Causes about this sub clinical desease'
    },
    symptoms: {
      type: Wysiwyg,
      schemaDoc: 'Symptoms about this sub clinical desease'
    },
    treatments: {
      type: Wysiwyg,
      schemaDoc: 'Treatments about this sub clinical desease'
    },
    notes: {
      type: Wysiwyg,
      schemaDoc: 'Notes about this sub clinical desease'
    },
    clinical: { type: Relationship, ref: 'Clinical', schemaDoc: 'The Clinical Desease of this Sub Clinical Desease' },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList('Clinical', {
  schemaDoc: 'Clinical details',
  fields: {
    name: { type: Text, schemaDoc: 'How generally call this desease?' },
    uimage: {
      type: Unsplash,
      accessKey: UNSPLASH_accessKey,
      secretKey: UNSPLASH_secretKey,
    },
    cimage: { type: CloudinaryImage, adapter: cldFileAdapter },
    description: {
      type: Content,
      blocks: [
        Content.blocks.heading,
        [
          Unsplash.blocks.unsplashImage,
          {
            attribution: 'KeystoneJS',
            accessKey: UNSPLASH_accessKey,
            secretKey: UNSPLASH_secretKey,
          },
        ],
        [CloudinaryImage.blocks.image, { adapter: cldFileAdapter }],
        Content.blocks.blockquote,
        Content.blocks.link,
        Content.blocks.orderedList,
        Content.blocks.unorderedList,
      ],
      schemaDoc: 'Description about this clinical desease'
    },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList('Type', {
  schemaDoc: 'Types of Drugs',
  fields: {
    name: { type: Text, schemaDoc: 'The name of the type' },
    unit: { type: Text, schemaDoc: 'The unit of measurement' },
    state: { type: Text, schemaDoc: 'The state of the type' },
    route: { type: Text, schemaDoc: 'The route of the type' },
    site: { type: Text, schemaDoc: 'The site of the type' },
    uses: { type: Text, schemaDoc: 'The Uses of the type' },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList('Manufacturer', {
  schemaDoc: 'Manufacturer details',
  fields: {
    name: { type: Text, schemaDoc: 'How generally call this Manufacturer?' },
    description: {
      type: Content,
      type: Wysiwyg,
      schemaDoc: 'Description about this Manufacturer'
    },
    country: { type: Select, options: country, schemaDoc: 'Country of Origin' },
    image: { type: CloudinaryImage, adapter: cldFileAdapter },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});


const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: { protectIdentities: process.env.NODE_ENV === 'production' },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      hooks: require.resolve('./src/admin_hooks/custom_hooks'),
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
  ],
};
