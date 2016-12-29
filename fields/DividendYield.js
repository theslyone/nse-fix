var invert = require('invert-obj');

function DividendYield (dividendYield) {
  this.message = dividendYield;
}

DividendYield.prototype.value = function () {
  return this.message;
};

DividendYield.Tag = '1380';

DividendYield.Type = 'PERCENTAGE';

module.exports = DividendYield;