var invert = require('invert-obj');

function UnderlyingFactor (underlyingFactor) {
  this.message = underlyingFactor;
}

UnderlyingFactor.prototype.value = function () {
  return this.message;
};

UnderlyingFactor.Tag = '246';

UnderlyingFactor.Type = 'FLOAT';

module.exports = UnderlyingFactor;