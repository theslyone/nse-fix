var invert = require('invert-obj');

function SettlObligMsgID (settlObligMsgId) {
  this.message = settlObligMsgId;
}

SettlObligMsgID.prototype.value = function () {
  return this.message;
};

SettlObligMsgID.Tag = '1160';

SettlObligMsgID.Type = 'STRING';

module.exports = SettlObligMsgID;