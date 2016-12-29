var invert = require('invert-obj');

function MDEntrySize (mdentrySize) {
  this.message = mdentrySize;
}

MDEntrySize.prototype.value = function () {
  return this.message;
};

MDEntrySize.Tag = '271';

MDEntrySize.Type = 'QTY';

module.exports = MDEntrySize;