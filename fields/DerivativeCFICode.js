var invert = require('invert-obj');

function DerivativeCFICode (derivativeCficode) {
  this.message = derivativeCficode;
}

DerivativeCFICode.prototype.value = function () {
  return this.message;
};

DerivativeCFICode.Tag = '1248';

DerivativeCFICode.Type = 'STRING';

module.exports = DerivativeCFICode;