var invert = require('invert-obj');

function UnderlyingLegSymbol (underlyingLegSymbol) {
  this.message = underlyingLegSymbol;
}

UnderlyingLegSymbol.prototype.value = function () {
  return this.message;
};

UnderlyingLegSymbol.Tag = '1330';

UnderlyingLegSymbol.Type = 'STRING';

module.exports = UnderlyingLegSymbol;