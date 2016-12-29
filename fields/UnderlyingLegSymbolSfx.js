var invert = require('invert-obj');

function UnderlyingLegSymbolSfx (underlyingLegSymbolSfx) {
  this.message = underlyingLegSymbolSfx;
}

UnderlyingLegSymbolSfx.prototype.value = function () {
  return this.message;
};

UnderlyingLegSymbolSfx.Tag = '1331';

UnderlyingLegSymbolSfx.Type = 'STRING';

module.exports = UnderlyingLegSymbolSfx;