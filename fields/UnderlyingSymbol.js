var invert = require('invert-obj');

function UnderlyingSymbol (underlyingSymbol) {
  this.message = underlyingSymbol;
}

UnderlyingSymbol.prototype.value = function () {
  return this.message;
};

UnderlyingSymbol.Tag = '311';

UnderlyingSymbol.Type = 'STRING';

module.exports = UnderlyingSymbol;