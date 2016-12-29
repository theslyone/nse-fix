var invert = require('invert-obj');

function ManualOrderIndicator (manualOrderIndicator) {
  this.message = manualOrderIndicator;
}

ManualOrderIndicator.prototype.value = function () {
  return this.message;
};

ManualOrderIndicator.Tag = '1028';

ManualOrderIndicator.Type = 'BOOLEAN';

module.exports = ManualOrderIndicator;