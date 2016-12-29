var invert = require('invert-obj');

function NoDerivativeInstrAttrib (noDerivativeInstrAttrib) {
  this.message = noDerivativeInstrAttrib;
}

NoDerivativeInstrAttrib.prototype.value = function () {
  return this.message;
};

NoDerivativeInstrAttrib.Tag = '1311';

NoDerivativeInstrAttrib.Type = 'NUMINGROUP';

module.exports = NoDerivativeInstrAttrib;