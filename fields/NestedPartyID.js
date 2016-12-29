var invert = require('invert-obj');

function NestedPartyID (nestedPartyId) {
  this.message = nestedPartyId;
}

NestedPartyID.prototype.value = function () {
  return this.message;
};

NestedPartyID.Tag = '524';

NestedPartyID.Type = 'STRING';

module.exports = NestedPartyID;