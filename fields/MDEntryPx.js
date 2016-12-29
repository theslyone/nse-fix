var invert = require('invert-obj');

function MDEntryPx (mdentryPx) {
  this.message = mdentryPx;
}

MDEntryPx.prototype.value = function () {
  return this.message;
};

MDEntryPx.Tag = '270';

MDEntryPx.Type = 'PRICE';

module.exports = MDEntryPx;