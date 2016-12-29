var invert = require('invert-obj');

function Nested3PartyRole (nested3PartyRole) {
  this.message = nested3PartyRole;
}

Nested3PartyRole.prototype.value = function () {
  return this.message;
};

Nested3PartyRole.Tag = '951';

Nested3PartyRole.Type = 'INT';

module.exports = Nested3PartyRole;