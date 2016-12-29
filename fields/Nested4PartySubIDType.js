var invert = require('invert-obj');

function Nested4PartySubIDType (nested4PartySubIdtype) {
  this.message = nested4PartySubIdtype;
}

Nested4PartySubIDType.prototype.value = function () {
  return this.message;
};

Nested4PartySubIDType.Tag = '1411';

Nested4PartySubIDType.Type = 'INT';

module.exports = Nested4PartySubIDType;