var invert = require('invert-obj');

function QuoteCondition (quoteCondition) {
  this.message = quoteCondition;
}

QuoteCondition.prototype.value = function () {
  return this.message;
};


QuoteCondition.Keys = {
  'OPEN_ACTIVE': 'A',
  'CLOSED_INACTIVE': 'B',
  'EXCHANGE_BEST': 'C',
  'CONSOLIDATED_BEST': 'D',
  'LOCKED': 'E',
  'CROSSED': 'F',
  'DEPTH': 'G',
  'FAST_TRADING': 'H',
  'NON_FIRM': 'I',
  'MANUAL_SLOW_QUOTE': 'L',
  'OUTRIGHT_PRICE': 'J',
  'IMPLIED_PRICE': 'K',
  'DEPTH_ON_OFFER': 'M',
  'DEPTH_ON_BID': 'N',
  'CLOSING': 'O',
  'NEWS_DISSEMINATION': 'P',
  'TRADING_RANGE': 'Q',
  'ORDER_INFLUX': 'R',
  'DUE_TO_RELATED': 'S',
  'NEWS_PENDING': 'T',
  'ADDITIONAL_INFO': 'U',
  'ADDITIONAL_INFO_DUE_TO_RELATED': 'V',
  'RESUME': 'W',
  'VIEW_OF_COMMON': 'X',
  'VOLUME_ALERT': 'Y',
  'ORDER_IMBALANCE': 'Z',
  'EQUIPMENT_CHANGEOVER': 'a',
  'NO_OPEN': 'b',
  'REGULAR_ETH': 'c',
  'AUTOMATIC_EXECUTION': 'd',
  'AUTOMATIC_EXECUTION_ETH': 'e',
  'FAST_MARKET_ETH': 'f ',
  'INACTIVE_ETH': 'g',
  'ROTATION': 'h',
  'ROTATION_ETH': 'i',
  'HALT': 'j',
  'HALT_ETH': 'k',
  'DUE_TO_NEWS_DISSEMINATION': 'l',
  'DUE_TO_NEWS_PENDING': 'm',
  'TRADING_RESUME': 'n',
  'OUT_OF_SEQUENCE': 'o',
  'BID_SPECIALIST': 'p',
  'OFFER_SPECIALIST': 'q',
  'BID_OFFER_SPECIALIST': 'r',
  'END_OF_DAY_SAM': 's',
  'FORBIDDEN_SAM': 't',
  'FROZEN_SAM': 'u',
  'PREOPENING_SAM': 'v',
  'OPENING_SAM': 'w',
  'OPEN_SAM': 'x',
  'SURVEILLANCE_SAM': 'y',
  'SUSPENDED_SAM': 'z',
  'RESERVED_SAM': '0',
  'NO_ACTIVE_SAM': '1',
  'RESTRICTED': '2',
  'REST_OF_BOOK_VWAP': '3',
  'BETTER_PRICES_IN_CONDITIONAL_ORDERS': '4',
  'MEDIAN_PRICE': '5',
};

QuoteCondition.Tag = '276';

QuoteCondition.Type = 'MULTIPLESTRINGVALUE';

QuoteCondition.Values = invert(QuoteCondition.Keys);

module.exports = QuoteCondition;