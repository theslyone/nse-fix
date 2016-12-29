var invert = require('invert-obj');

function MDEntryDate (mdentryDate) {
  this.message = mdentryDate;
}

MDEntryDate.prototype.value = function () {
  return this.message;
};

MDEntryDate.Tag = '272';

MDEntryDate.Type = 'UTCDATEONLY';

module.exports = MDEntryDate;