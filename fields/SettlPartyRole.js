var invert = require('invert-obj');

function SettlPartyRole (settlPartyRole) {
  this.message = settlPartyRole;
}

SettlPartyRole.prototype.value = function () {
  return this.message;
};

SettlPartyRole.Tag = '784';

SettlPartyRole.Type = 'INT';

module.exports = SettlPartyRole;