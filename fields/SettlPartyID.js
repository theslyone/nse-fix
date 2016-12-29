var invert = require('invert-obj');

function SettlPartyID (settlPartyId) {
  this.message = settlPartyId;
}

SettlPartyID.prototype.value = function () {
  return this.message;
};

SettlPartyID.Tag = '782';

SettlPartyID.Type = 'STRING';

module.exports = SettlPartyID;