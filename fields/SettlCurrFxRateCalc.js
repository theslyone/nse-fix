var invert = require('invert-obj');

function SettlCurrFxRateCalc (settlCurrFxRateCalc) {
  this.message = settlCurrFxRateCalc;
}

SettlCurrFxRateCalc.prototype.value = function () {
  return this.message;
};


SettlCurrFxRateCalc.Keys = {
  'MULTIPLY': 'M',
  'DIVIDE': 'D',
};

SettlCurrFxRateCalc.Tag = '156';

SettlCurrFxRateCalc.Type = 'CHAR';

SettlCurrFxRateCalc.Values = invert(SettlCurrFxRateCalc.Keys);

module.exports = SettlCurrFxRateCalc;