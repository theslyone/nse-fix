var invert = require('invert-obj');

function MDEntryBuyer (mdentryBuyer) {
  this.message = mdentryBuyer;
}

MDEntryBuyer.prototype.value = function () {
  return this.message;
};

MDEntryBuyer.Tag = '288';

MDEntryBuyer.Type = 'STRING';

module.exports = MDEntryBuyer;