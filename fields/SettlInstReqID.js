var invert = require('invert-obj');

function SettlInstReqID (settlInstReqId) {
  this.message = settlInstReqId;
}

SettlInstReqID.prototype.value = function () {
  return this.message;
};

SettlInstReqID.Tag = '791';

SettlInstReqID.Type = 'STRING';

module.exports = SettlInstReqID;