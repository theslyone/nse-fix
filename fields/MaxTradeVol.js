var invert = require('invert-obj');

function MaxTradeVol (maxTradeVol) {
  this.message = maxTradeVol;
}

MaxTradeVol.prototype.value = function () {
  return this.message;
};

MaxTradeVol.Tag = '1140';

MaxTradeVol.Type = 'QTY';

module.exports = MaxTradeVol;