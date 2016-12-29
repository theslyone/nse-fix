var invert = require('invert-obj');

function PegSymbol (pegSymbol) {
  this.message = pegSymbol;
}

PegSymbol.prototype.value = function () {
  return this.message;
};

PegSymbol.Tag = '1098';

PegSymbol.Type = 'STRING';

module.exports = PegSymbol;