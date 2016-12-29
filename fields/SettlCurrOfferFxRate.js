var invert = require('invert-obj');

function SettlCurrOfferFxRate (settlCurrOfferFxRate) {
  this.message = settlCurrOfferFxRate;
}

SettlCurrOfferFxRate.prototype.value = function () {
  return this.message;
};

SettlCurrOfferFxRate.Tag = '657';

SettlCurrOfferFxRate.Type = 'FLOAT';

module.exports = SettlCurrOfferFxRate;