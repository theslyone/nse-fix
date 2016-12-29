var invert = require('invert-obj');

function Factor (factor) {
  this.message = factor;
}

Factor.prototype.value = function () {
  return this.message;
};

Factor.Tag = '228';

Factor.Type = 'FLOAT';

module.exports = Factor;