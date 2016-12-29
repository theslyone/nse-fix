var invert = require('invert-obj');

function LegSymbolSfx (legSymbolSfx) {
  this.message = legSymbolSfx;
}

LegSymbolSfx.prototype.value = function () {
  return this.message;
};

LegSymbolSfx.Tag = '601';

LegSymbolSfx.Type = 'STRING';

module.exports = LegSymbolSfx;