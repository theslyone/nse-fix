var invert = require('invert-obj');

function SettlCurrFxRate (settlCurrFxRate) {
  this.message = settlCurrFxRate;
}

SettlCurrFxRate.prototype.value = function () {
  return this.message;
};

SettlCurrFxRate.Tag = '155';

SettlCurrFxRate.Type = 'FLOAT';

module.exports = SettlCurrFxRate;