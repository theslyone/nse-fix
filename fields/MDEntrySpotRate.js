var invert = require('invert-obj');

function MDEntrySpotRate (mdentrySpotRate) {
  this.message = mdentrySpotRate;
}

MDEntrySpotRate.prototype.value = function () {
  return this.message;
};

MDEntrySpotRate.Tag = '1026';

MDEntrySpotRate.Type = 'FLOAT';

module.exports = MDEntrySpotRate;