var invert = require('invert-obj');

function MDEntryForwardPoints (mdentryForwardPoints) {
  this.message = mdentryForwardPoints;
}

MDEntryForwardPoints.prototype.value = function () {
  return this.message;
};

MDEntryForwardPoints.Tag = '1027';

MDEntryForwardPoints.Type = 'PRICEOFFSET';

module.exports = MDEntryForwardPoints;