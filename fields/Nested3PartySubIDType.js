var invert = require('invert-obj');

function Nested3PartySubIDType (nested3PartySubIdtype) {
  this.message = nested3PartySubIdtype;
}

Nested3PartySubIDType.prototype.value = function () {
  return this.message;
};

Nested3PartySubIDType.Tag = '954';

Nested3PartySubIDType.Type = 'INT';

module.exports = Nested3PartySubIDType;