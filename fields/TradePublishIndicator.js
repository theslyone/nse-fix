var invert = require('invert-obj');

function TradePublishIndicator (tradePublishIndicator) {
  this.message = tradePublishIndicator;
}

TradePublishIndicator.prototype.value = function () {
  return this.message;
};


TradePublishIndicator.Keys = {
  'DO_NOT_PUBLISH_TRADE': '0',
  'PUBLISH_TRADE': '1',
  'DEFERRED_PUBLICATION': '2',
};

TradePublishIndicator.Tag = '1390';

TradePublishIndicator.Type = 'INT';

TradePublishIndicator.Values = invert(TradePublishIndicator.Keys);

module.exports = TradePublishIndicator;