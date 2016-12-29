var invert = require('invert-obj');

function LegDividendYield (legDividendYield) {
  this.message = legDividendYield;
}

LegDividendYield.prototype.value = function () {
  return this.message;
};

LegDividendYield.Tag = '1381';

LegDividendYield.Type = 'PERCENTAGE';

module.exports = LegDividendYield;