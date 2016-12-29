var invert = require('invert-obj');

function MDEntryType (mdentryType) {
  this.message = mdentryType;
}

MDEntryType.prototype.value = function () {
  return this.message;
};


MDEntryType.Keys = {
  'BID': '0',
  'OFFER': '1',
  'TRADE': '2',
  'INDEX_VALUE': '3',
  'OPENING_PRICE': '4',
  'CLOSING_PRICE': '5',
  'SETTLEMENT_PRICE': '6',
  'TRADING_SESSION_HIGH_PRICE': '7',
  'TRADING_SESSION_LOW_PRICE': '8',
  'TRADING_SESSION_VWAP_PRICE': '9',
  'IMBALANCE': 'A',
  'TRADE_VOLUME': 'B',
  'OPEN_INTEREST': 'C',
  'COMPOSITE_UNDERLYING_PRICE': 'D',
  'SIMULATED_SELL_PRICE': 'E',
  'SIMULATED_BUY_PRICE': 'F',
  'MARGIN_RATE': 'G',
  'MID_PRICE': 'H',
  'EMPTY_BOOK': 'J',
  'SETTLE_HIGH_PRICE': 'K',
  'SETTLE_LOW_PRICE': 'L',
  'PRIOR_SETTLE_PRICE': 'M',
  'SESSION_HIGH_BID': 'N',
  'SESSION_LOW_OFFER': 'O',
  'EARLY_PRICES': 'P',
  'AUCTION_CLEARING_PRICE': 'Q',
  'SWAP_VALUE_FACTOR': 'S',
  'DAILY_VALUE_ADJUSTMENT_FOR_LONG_POSITIONS': 'R',
  'CUMULATIVE_VALUE_ADJUSTMENT_FOR_LONG_POSITIONS': 'T',
  'DAILY_VALUE_ADJUSTMENT_FOR_SHORT_POSITIONS': 'U',
  'CUMULATIVE_VALUE_ADJUSTMENT_FOR_SHORT_POSITIONS': 'V',
  'RECOVERY_RATE': 'Y',
  'RECOVERY_RATE_FOR_LONG': 'Z',
  'RECOVERY_RATE_FOR_SHORT': 'a',
  'FIXING_PRICE': 'W',
  'CASH_RATE': 'X',
};

MDEntryType.Tag = '269';

MDEntryType.Type = 'CHAR';

MDEntryType.Values = invert(MDEntryType.Keys);

module.exports = MDEntryType;