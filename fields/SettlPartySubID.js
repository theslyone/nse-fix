var invert = require('invert-obj');

function SettlPartySubID (settlPartySubId) {
  this.message = settlPartySubId;
}

SettlPartySubID.prototype.value = function () {
  return this.message;
};

SettlPartySubID.Tag = '785';

SettlPartySubID.Type = 'STRING';

module.exports = SettlPartySubID;