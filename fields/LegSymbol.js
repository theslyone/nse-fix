var invert = require('invert-obj');

function LegSymbol (legSymbol) {
  this.message = legSymbol;
}

LegSymbol.prototype.value = function () {
  return this.message;
};

LegSymbol.Tag = '600';

LegSymbol.Type = 'STRING';

module.exports = LegSymbol;