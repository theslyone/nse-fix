var invert = require('invert-obj');

function MDEntryID (mdentryId) {
  this.message = mdentryId;
}

MDEntryID.prototype.value = function () {
  return this.message;
};

MDEntryID.Tag = '278';

MDEntryID.Type = 'STRING';

module.exports = MDEntryID;