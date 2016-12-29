var invert = require('invert-obj');

function SecurityTradingEvent (securityTradingEvent) {
  this.message = securityTradingEvent;
}

SecurityTradingEvent.prototype.value = function () {
  return this.message;
};


SecurityTradingEvent.Keys = {
  'ORDER_IMBALANCE_AUCTION_IS_EXTENDED': '1',
  'TRADING_RESUMES': '2',
  'PRICE_VOLATILITY_INTERRUPTION': '3',
  'CHANGE_OF_TRADING_SESSION': '4',
  'CHANGE_OF_TRADING_SUBSESSION': '5',
  'CHANGE_OF_SECURITY_STATUS': '6',
  'CHANGE_OF_BOOK_TYPE': '7',
  'CHANGE_OF_MARKET_DEPTH': '8',
};

SecurityTradingEvent.Tag = '1174';

SecurityTradingEvent.Type = 'INT';

SecurityTradingEvent.Values = invert(SecurityTradingEvent.Keys);

module.exports = SecurityTradingEvent;