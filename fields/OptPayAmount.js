var invert = require('invert-obj');

function OptPayAmount (optPayAmount) {
  this.message = optPayAmount;
}

OptPayAmount.prototype.value = function () {
  return this.message;
};

OptPayAmount.Tag = '1195';

OptPayAmount.Type = 'AMT';

module.exports = OptPayAmount;