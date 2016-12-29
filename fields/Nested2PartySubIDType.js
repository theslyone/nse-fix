var invert = require('invert-obj');

function Nested2PartySubIDType (nested2PartySubIdtype) {
  this.message = nested2PartySubIdtype;
}

Nested2PartySubIDType.prototype.value = function () {
  return this.message;
};

Nested2PartySubIDType.Tag = '807';

Nested2PartySubIDType.Type = 'INT';

module.exports = Nested2PartySubIDType;