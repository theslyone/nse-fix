var invert = require('invert-obj');

function SettlInstMsgID (settlInstMsgId) {
  this.message = settlInstMsgId;
}

SettlInstMsgID.prototype.value = function () {
  return this.message;
};

SettlInstMsgID.Tag = '777';

SettlInstMsgID.Type = 'STRING';

module.exports = SettlInstMsgID;