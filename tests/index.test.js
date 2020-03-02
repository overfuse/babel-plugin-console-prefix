const path = require('path');
const pluginTester = require('babel-plugin-tester').default;
const plugin = require('../lib');

pluginTester({
  plugin,
  pluginOptions: {
    prefix: 'Bonify rocks',
  },
  fixtures: path.join(__dirname, 'fixtures')
});