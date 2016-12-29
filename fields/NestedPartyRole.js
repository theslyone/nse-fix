var invert = require('invert-obj');

function NestedPartyRole (nestedPartyRole) {
  this.message = nestedPartyRole;
}

NestedPartyRole.prototype.value = function () {
  return this.message;
};

NestedPartyRole.Tag = '538';

NestedPartyRole.Type = 'INT';

module.exports = NestedPartyRole;