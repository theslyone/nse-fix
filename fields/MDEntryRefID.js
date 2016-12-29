var invert = require('invert-obj');

function MDEntryRefID (mdentryRefId) {
  this.message = mdentryRefId;
}

MDEntryRefID.prototype.value = function () {
  return this.message;
};

MDEntryRefID.Tag = '280';

MDEntryRefID.Type = 'STRING';

module.exports = MDEntryRefID;