var invert = require('invert-obj');

function DerivativeSymbolSfx (derivativeSymbolSfx) {
  this.message = derivativeSymbolSfx;
}

DerivativeSymbolSfx.prototype.value = function () {
  return this.message;
};

DerivativeSymbolSfx.Tag = '1215';

DerivativeSymbolSfx.Type = 'STRING';

module.exports = DerivativeSymbolSfx;