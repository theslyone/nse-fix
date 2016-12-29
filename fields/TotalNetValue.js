var invert = require('invert-obj');

function TotalNetValue (totalNetValue) {
  this.message = totalNetValue;
}

TotalNetValue.prototype.value = function () {
  return this.message;
};

TotalNetValue.Tag = '900';

TotalNetValue.Type = 'AMT';

module.exports = TotalNetValue;