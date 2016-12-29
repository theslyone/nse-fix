var invert = require('invert-obj');

function NestedPartySubID (nestedPartySubId) {
  this.message = nestedPartySubId;
}

NestedPartySubID.prototype.value = function () {
  return this.message;
};

NestedPartySubID.Tag = '545';

NestedPartySubID.Type = 'STRING';

module.exports = NestedPartySubID;