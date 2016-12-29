var invert = require('invert-obj');

function SolicitedFlag (solicitedFlag) {
  this.message = solicitedFlag;
}

SolicitedFlag.prototype.value = function () {
  return this.message;
};


SolicitedFlag.Keys = {
  'NO': 'N',
  'YES': 'Y',
};

SolicitedFlag.Tag = '377';

SolicitedFlag.Type = 'BOOLEAN';

SolicitedFlag.Values = invert(SolicitedFlag.Keys);

module.exports = SolicitedFlag;