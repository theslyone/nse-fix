var invert = require('invert-obj');

function SettlPartySubIDType (settlPartySubIdtype) {
  this.message = settlPartySubIdtype;
}

SettlPartySubIDType.prototype.value = function () {
  return this.message;
};

SettlPartySubIDType.Tag = '786';

SettlPartySubIDType.Type = 'INT';

module.exports = SettlPartySubIDType;