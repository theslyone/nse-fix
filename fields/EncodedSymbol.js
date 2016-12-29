var invert = require('invert-obj');

function EncodedSymbol (encodedSymbol) {
  this.message = encodedSymbol;
}

EncodedSymbol.prototype.value = function () {
  return this.message;
};

EncodedSymbol.Tag = '1360';

EncodedSymbol.Type = 'DATA';

module.exports = EncodedSymbol;