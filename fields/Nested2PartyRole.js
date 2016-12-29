var invert = require('invert-obj');

function Nested2PartyRole (nested2PartyRole) {
  this.message = nested2PartyRole;
}

Nested2PartyRole.prototype.value = function () {
  return this.message;
};

Nested2PartyRole.Tag = '759';

Nested2PartyRole.Type = 'INT';

module.exports = Nested2PartyRole;