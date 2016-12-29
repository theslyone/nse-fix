var invert = require('invert-obj');

function MDPriceLevel (mdpriceLevel) {
  this.message = mdpriceLevel;
}

MDPriceLevel.prototype.value = function () {
  return this.message;
};

MDPriceLevel.Tag = '1023';

MDPriceLevel.Type = 'INT';

module.exports = MDPriceLevel;