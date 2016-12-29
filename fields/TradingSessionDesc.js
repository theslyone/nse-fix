var invert = require('invert-obj');

function TradingSessionDesc (tradingSessionDesc) {
  this.message = tradingSessionDesc;
}

TradingSessionDesc.prototype.value = function () {
  return this.message;
};

TradingSessionDesc.Tag = '1326';

TradingSessionDesc.Type = 'STRING';

module.exports = TradingSessionDesc;