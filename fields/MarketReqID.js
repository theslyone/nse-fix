var invert = require('invert-obj');

function MarketReqID (marketReqId) {
  this.message = marketReqId;
}

MarketReqID.prototype.value = function () {
  return this.message;
};

MarketReqID.Tag = '1393';

MarketReqID.Type = 'STRING';

module.exports = MarketReqID;