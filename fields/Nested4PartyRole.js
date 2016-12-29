var invert = require('invert-obj');

function Nested4PartyRole (nested4PartyRole) {
  this.message = nested4PartyRole;
}

Nested4PartyRole.prototype.value = function () {
  return this.message;
};

Nested4PartyRole.Tag = '1417';

Nested4PartyRole.Type = 'INT';

module.exports = Nested4PartyRole;