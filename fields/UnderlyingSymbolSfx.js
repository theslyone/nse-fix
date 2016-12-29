var invert = require('invert-obj');

function UnderlyingSymbolSfx (underlyingSymbolSfx) {
  this.message = underlyingSymbolSfx;
}

UnderlyingSymbolSfx.prototype.value = function () {
  return this.message;
};

UnderlyingSymbolSfx.Tag = '312';

UnderlyingSymbolSfx.Type = 'STRING';

module.exports = UnderlyingSymbolSfx;