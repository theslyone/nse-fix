var invert = require('invert-obj');

function NestedPartySubIDType (nestedPartySubIdtype) {
  this.message = nestedPartySubIdtype;
}

NestedPartySubIDType.prototype.value = function () {
  return this.message;
};

NestedPartySubIDType.Tag = '805';

NestedPartySubIDType.Type = 'INT';

module.exports = NestedPartySubIDType;