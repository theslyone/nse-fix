var invert = require('invert-obj');

function MarketDepth (marketDepth) {
  this.message = marketDepth;
}

MarketDepth.prototype.value = function () {
  return this.message;
};

MarketDepth.Tag = '264';

MarketDepth.Type = 'INT';

module.exports = MarketDepth;