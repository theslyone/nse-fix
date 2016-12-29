var invert = require('invert-obj');

function UnderlyingFXRate (underlyingFxrate) {
  this.message = underlyingFxrate;
}

UnderlyingFXRate.prototype.value = function () {
  return this.message;
};

UnderlyingFXRate.Tag = '1045';

UnderlyingFXRate.Type = 'FLOAT';

module.exports = UnderlyingFXRate;