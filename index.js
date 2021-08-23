const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'Pillpack.lk';
const adapterConfig = { mongoUri: 'mongodb://localhost/pillpack' };

const initialiseData = require('./initial-data');

cookie = {
  secure: false, // Defaults to true in production
  maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
  sameSite: false,
};

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
  cookie: cookie,

  cookieSecret: 'pillpackgql'
});

const access = require('./src/auth/access');
const lists = require('./src/lists/lists');

keystone.createList('User', lists.app.user);
keystone.createList('Info', lists.app.info);
keystone.createList('Charges', lists.app.charges);

const pl = lists.pharma
keystone.createList('ProductMedicine', pl.products.medicine);
keystone.createList('ProductInstrument', pl.products.instrument);
keystone.createList('ProductMedicineListing', pl.products.medicine_listing);
keystone.createList('ProductInstrumentListing', pl.products.instrument_listing);
keystone.createList('Cart', pl.selling.cart);
keystone.createList('Order', pl.selling.orders);

const ddl = lists.drug_data;
keystone.createList('Instrument', ddl.instruments);
keystone.createList('Medicine', ddl.medicine);
keystone.createList('Brand', ddl.brands);
keystone.createList('SubClinical', ddl.subclinical);
keystone.createList('Clinical', ddl.clinical);
keystone.createList('Manufacturer', ddl.manufacturer);
keystone.createList('Type', ddl.types);
keystone.createList('Timing', ddl.timing);



keystone.createList('DoctorCategory', lists.users.doctors.categories);



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
      hooks: (access.userIsDrugAdmin) ? require.resolve('./src/admin_hooks/drug_hooks') : require.resolve('./src/admin_hooks/custom_hooks'),
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
  ],
};
