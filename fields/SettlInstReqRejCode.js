var invert = require('invert-obj');

function SettlInstReqRejCode (settlInstReqRejCode) {
  this.message = settlInstReqRejCode;
}

SettlInstReqRejCode.prototype.value = function () {
  return this.message;
};


SettlInstReqRejCode.Keys = {
  'UNABLE_TO_PROCESS_REQUEST': '0',
  'UNKNOWN_ACCOUNT': '1',
  'NO_MATCHING_SETTLEMENT_INSTRUCTIONS_FOUND': '2',
  'OTHER': '99',
};

SettlInstReqRejCode.Tag = '792';

SettlInstReqRejCode.Type = 'INT';

SettlInstReqRejCode.Values = invert(SettlInstReqRejCode.Keys);

module.exports = SettlInstReqRejCode;