const path = require('path');
const pluginTester = require('babel-plugin-tester').default;
const plugin = require('../lib');

pluginTester({
  plugin,
  fixtures: path.join(__dirname, 'fixtures')
});