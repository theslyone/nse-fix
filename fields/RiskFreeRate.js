var invert = require('invert-obj');

function RiskFreeRate (riskFreeRate) {
  this.message = riskFreeRate;
}

RiskFreeRate.prototype.value = function () {
  return this.message;
};

RiskFreeRate.Tag = '1190';

RiskFreeRate.Type = 'FLOAT';

module.exports = RiskFreeRate;