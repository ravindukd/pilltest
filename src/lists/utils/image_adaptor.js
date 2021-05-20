const { CloudinaryAdapter } = require('@keystonejs/file-adapters');

const cldFileAdapter = new CloudinaryAdapter({
  cloudName: 'pillpacklk',
  apiKey: '562426265463471',
  apiSecret: 'SxtKe9vL9qeH9KofRjJCDTXv8Is',
  folder: 'drug_data',
});

module.exports = cldFileAdapter