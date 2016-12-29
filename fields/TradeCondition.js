var invert = require('invert-obj');

function TradeCondition (tradeCondition) {
  this.message = tradeCondition;
}

TradeCondition.prototype.value = function () {
  return this.message;
};


TradeCondition.Keys = {
  'CASH': 'A',
  'AVERAGE_PRICE_TRADE': 'B',
  'CASH_TRADE': 'C',
  'NEXT_DAY': 'D',
  'OPENING_REOPENING_TRADE_DETAIL': 'E',
  'INTRADAY_TRADE_DETAIL': 'F',
  'RULE_127_TRADE': 'G',
  'RULE_155_TRADE': 'H',
  'SOLD_LAST': 'I',
  'NEXT_DAY_TRADE': 'J',
  'OPENED': 'K',
  'SELLER': 'L',
  'SOLD': 'M',
  'STOPPED_STOCK': 'N',
  'IMBALANCE_MORE_BUYERS': 'P',
  'IMBALANCE_MORE_SELLERS': 'Q',
  'OPENING_PRICE': 'R',
  'TRADES_RESULTING_FROM_MANUAL_SLOW_QUOTE': 'Y',
  'TRADES_RESULTING_FROM_INTERMARKET_SWEEP': 'Z',
  'BARGAIN_CONDITION': 'S',
  'CONVERTED_PRICE_INDICATOR': 'T',
  'EXCHANGE_LAST': 'U',
  'FINAL_PRICE_OF_SESSION': 'V',
  'EX_PIT': 'W',
  'CROSSED_X': 'X',
  'CANCEL': '0',
  'VOLUME_ONLY': 'a',
  'DIRECT_PLUS': 'b',
  'ACQUISITION': 'c',
  'BUNCHED': 'd',
  'DISTRIBUTION': 'e',
  'BUNCHED_SALE': 'f',
  'SPLIT_TRADE': 'g',
  'CANCEL_STOPPED': 'h',
  'CANCEL_ETH': 'i',
  'CANCEL_STOPPED_ETH': 'j',
  'OUT_OF_SEQUENCE_ETH': 'k',
  'CANCEL_LAST_ETH': 'l',
  'SOLD_LAST_SALE_ETH': 'm',
  'CANCEL_LAST': 'n',
  'SOLD_LAST_SALE': 'o',
  'CANCEL_OPEN': 'p',
  'CANCEL_OPEN_ETH': 'q',
  'OPENED_SALE_ETH': 'r',
  'CANCEL_ONLY': 's',
  'CANCEL_ONLY_ETH': 't',
  'LATE_OPEN_ETH': 'u',
  'AUTO_EXECUTION_ETH': 'v',
  'REOPEN': 'w',
  'REOPEN_ETH': 'x',
  'ADJUSTED': 'y',
  'ADJUSTED_ETH': 'z',
  'SPREAD': 'AA',
  'SPREAD_ETH': 'AB',
  'STRADDLE': 'AC',
  'STRADDLE_ETH': 'AD',
  'STOPPED': 'AE',
  'STOPPED_ETH': 'AF',
  'REGULAR_ETH': 'AG',
  'COMBO': 'AH',
  'COMBO_ETH': 'AI',
  'OFFICIAL_CLOSING_PRICE': 'AJ',
  'PRIOR_REFERENCE_PRICE': 'AK',
  'STOPPED_SOLD_LAST': 'AL',
  'STOPPED_OUT_OF_SEQUENCE': 'AM',
  'OFFICAL_CLOSING_PRICE': 'AN',
  'CROSSED_AO': 'AO',
  'FAST_MARKET': 'AP',
  'AUTOMATIC_EXECUTION': 'AQ',
  'FORM_T': 'AR',
  'BASKET_INDEX': 'AS',
  'BURST_BASKET': 'AT',
  'IMPLIED_TRADE': '1',
  'OUTSIDE_SPREAD': 'AV',
  'MARKETPLACE_ENTERED_TRADE': '2',
  'MULT_ASSET_CLASS_MULTILEG_TRADE': '3',
  'MULTILEG_TO_MULTILEG_TRADE': '4',
};

TradeCondition.Tag = '277';

TradeCondition.Type = 'MULTIPLESTRINGVALUE';

TradeCondition.Values = invert(TradeCondition.Keys);

module.exports = TradeCondition;