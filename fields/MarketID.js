var invert = require('invert-obj');

function MarketID (marketId) {
  this.message = marketId;
}

MarketID.prototype.value = function () {
  return this.message;
};

MarketID.Tag = '1301';

MarketID.Type = 'EXCHANGE';

module.exports = MarketID;