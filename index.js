const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { Checkbox, Text, Relationship, Float, Password } = require('@keystonejs/fields');
const { Unsplash } = require('@keystonejs/fields-unsplash');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NuxtApp } = require('@keystonejs/app-nuxt');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'Pillpack.lk';
const adapterConfig = { mongoUri: 'mongodb://localhost/pillpack' };
const UNSPLASH_accessKey = 'VVaFnWU0c-PwpTRVdhTmq3orWetmbApkU5WqvSas8a0';
const UNSPLASH_secretKey = '4TBtpcvVRoApG7hhM73LsV2muuv7HG5TMoyvO37tB88';


const { Content } = require('@keystonejs/fields-content');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

cookie = {
  secure: process.env.NODE_ENV === 'production', // Defaults to true in production
  maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
  sameSite: false,
};
const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookie: cookie,
  cookieSecret: 'ZhdhZPh5XYD7iJxRCmsbzSaW98BdgsFc'
});

const cldFileAdapter = new CloudinaryAdapter({
  cloudName: 'pillpacklk',
  apiKey: '562426265463471',
  apiSecret: 'SxtKe9vL9qeH9KofRjJCDTXv8Is',
  folder: 'drug_data',
});

// keystone.createList('User', {
//   fields: {
//     username: { type: Text },
//     password: { type: Password },
//   },
// });

// const authStrategy = keystone.createAuthStrategy({
//   type: PasswordAuthStrategy,
//   list: 'User',
//   config: {
//     identityField: 'username',
//     secretField: 'password',
//   },
// });

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
});

keystone.createList('ProductInstrument', {
  schemaDoc: 'Instruments',
  fields: {
    name: { type: Text, schemaDoc: 'The name of the Instrument', isRequired: true },
    brand: { type: Relationship, ref: 'Brand', schemaDoc: 'Brand of this medicine' },
    type: { type: Relationship, ref: 'Type', schemaDoc: 'Brand of this medicine' },
    isOTC: { type: Checkbox, isRequired: true },
    listing: { type: Relationship, ref: 'ProductInstrumentListing', many: true, schemaDoc: 'Listings of this medicine' },
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
});

keystone.createList('ProductMedicineListing', {
  schemaDoc: 'Medicine Listing',
  fields: {
    country: { type: Text, schemaDoc: 'Country of Origin' },
    package_size: { type: Float, schemaDoc: 'Package Size' },
    dosage: { type: Float, schemaDoc: 'Dosage' },
    manufacturer: { type: Relationship, ref: 'Manufacturer', schemaDoc: 'Manufacturer of this medicine' },
    price: { type: Float, schemaDoc: 'Price' },
    stock: { type: Float, schemaDoc: 'Stock' },
    image: { type: CloudinaryImage, adapter: cldFileAdapter },
    brand: { type: Relationship, ref: 'Brand', schemaDoc: 'Brand of this medicine' },
    parent: { type: Relationship, ref: 'ProductMedicine', schemaDoc: 'Parent of this medicine' },
  },
});


keystone.createList('ProductInstrumentListing', {
  schemaDoc: 'Instrument Listing',
  fields: {
    country: { type: Text, schemaDoc: 'Country of Origin' },
    manufacturer: { type: Relationship, ref: 'Manufacturer', schemaDoc: 'Manufacturer of this Instrument' },
    special_delivery_required: { type: Checkbox, isRequired: true },
    special_delivery_method: { type: Text, isRequired: true },
    special_delivery_charge: { type: Text, isRequired: true },
    price: { type: Float, schemaDoc: 'Price' },
    stock: { type: Float, schemaDoc: 'Stock' },
    image: { type: CloudinaryImage, adapter: cldFileAdapter },
    brand: { type: Relationship, ref: 'Brand', schemaDoc: 'Brand of this Instrument' },
    parent: { type: Relationship, ref: 'ProductInstrument', schemaDoc: 'Parent of this Instrument' },
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
    allergies: {
      type: Wysiwyg,
      schemaDoc: 'Allergies of this medicine'
    },
    contraindications: {
      type: Wysiwyg,
      schemaDoc: 'Contraindications of this medicine'
    },
    interactions: {
      type: Wysiwyg,
      schemaDoc: 'Interactions of this medicine'
    },
    precautions: {
      type: Wysiwyg,
      schemaDoc: 'Precautions of this medicine'
    },
    side_effects: {
      type: Wysiwyg,
      schemaDoc: 'Side effects of this medicine'
    },
    uses: {
      type: Wysiwyg,
      schemaDoc: 'Uses of this medicine'
    },
    other: {
      type: Wysiwyg,
      schemaDoc: 'other details of this medicine'
    },
    sub_clinical: { type: Relationship, ref: 'SubClinical', many: true, schemaDoc: 'Sub clinical diseases related to this medicine' },
    clinical: { type: Relationship, ref: 'Clinical', many: true, schemaDoc: 'Clinical diseases related to this medicine' },
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
});

keystone.createList('Clinical', {
  schemaDoc: 'Clinical details',
  fields: {
    name: { type: Text, schemaDoc: 'How generally call this desease?' },
    sub_clinical: { type: Relationship, ref: 'SubClinical', many: true, schemaDoc: 'How generally call this desease?' },
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
    country: { type: Text, schemaDoc: 'Country of this manufacturer' },
    image: { type: CloudinaryImage, adapter: cldFileAdapter },
  },
});

// keystone.createList('Order', {
//   schemaDoc: 'Order Details',
//   fields: {
//     name: { type: Text, schemaDoc: 'Single Order' },
//     isEnabled: { type: Checkbox, isRequired: true },
//   },
// });

module.exports = {
  keystone,
  apps: [
    new GraphQLApp({
      apollo: {
        cacheControl: {
          defaultMaxAge: 3600,
        },
      },
    }),
    new AdminUIApp({ name: PROJECT_NAME, hooks: require.resolve('./src/admin_hooks/custom_hooks') }),
    new NuxtApp({
      srcDir: 'src',
      buildDir: 'dist',
    }),
  ],
};
