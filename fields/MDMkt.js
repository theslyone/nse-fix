var invert = require('invert-obj');

function MDMkt (mdmkt) {
  this.message = mdmkt;
}

MDMkt.prototype.value = function () {
  return this.message;
};

MDMkt.Tag = '275';

MDMkt.Type = 'EXCHANGE';

module.exports = MDMkt;