var invert = require('invert-obj');

function SettlCurrBidFxRate (settlCurrBidFxRate) {
  this.message = settlCurrBidFxRate;
}

SettlCurrBidFxRate.prototype.value = function () {
  return this.message;
};

SettlCurrBidFxRate.Tag = '656';

SettlCurrBidFxRate.Type = 'FLOAT';

module.exports = SettlCurrBidFxRate;