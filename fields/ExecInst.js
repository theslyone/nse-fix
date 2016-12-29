var invert = require('invert-obj');

function ExecInst (execInst) {
  this.message = execInst;
}

ExecInst.prototype.value = function () {
  return this.message;
};


ExecInst.Keys = {
  'STAY_ON_OFFER_SIDE': '0',
  'NOT_HELD': '1',
  'WORK': '2',
  'GO_ALONG': '3',
  'OVER_THE_DAY': '4',
  'HELD': '5',
  'PARTICIPANT_DONT_INITIATE': '6',
  'STRICT_SCALE': '7',
  'TRY_TO_SCALE': '8',
  'STAY_ON_BID_SIDE': '9',
  'NO_CROSS': 'A',
  'TRAILING_STOP_PEG': 'a',
  'OK_TO_CROSS': 'B',
  'STRICT_LIMIT': 'b',
  'IGNORE_PRICE_VALIDITY_CHECKS': 'c',
  'CALL_FIRST': 'C',
  'PEG_TO_LIMIT_PRICE': 'd',
  'PERCENT_OF_VOLUME': 'D',
  'DO_NOT_INCREASE': 'E',
  'WORK_TO_TARGET_STRATEGY': 'e',
  'DO_NOT_REDUCE': 'F',
  'ALL_OR_NONE': 'G',
  'REINSTATE_ON_SYSTEM_FAILURE': 'H',
  'INSTITUTIONS_ONLY': 'I',
  'REINSTATE_ON_TRADING_HALT': 'J',
  'CANCEL_ON_TRADING_HALT': 'K',
  'LAST_PEG': 'L',
  'MID_PRICE_PEG': 'M',
  'NON_NEGOTIABLE': 'N',
  'OPENING_PEG': 'O',
  'MARKET_PEG': 'P',
  'CANCEL_ON_SYSTEM_FAILURE': 'Q',
  'PRIMARY_PEG': 'R',
  'SUSPEND': 'S',
  'CUSTOMER_DISPLAY_INSTRUCTION': 'U',
  'NETTING': 'V',
  'PEG_TO_VWAP': 'W',
  'TRADE_ALONG': 'X',
  'TRY_TO_STOP': 'Y',
  'CANCEL_IF_NOT_BEST': 'Z',
  'INTERMARKET_SWEEP': 'f',
  'SINGLE_EXECUTION_REQUESTED_FOR_BLOCK_TRADE': 'j',
  'EXTERNAL_ROUTING_ALLOWED': 'g',
  'EXTERNAL_ROUTING_NOT_ALLOWED': 'h',
  'IMBALANCE_ONLY': 'i',
  'FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER': 'T',
  'BEST_EXECUTION': 'k',
  'SUSPEND_ON_SYSTEM_FAILURE': 'l',
  'SUSPEND_ON_TRADING_HALT': 'm',
  'REINSTATE_ON_CONNECTION_LOSS': 'n',
  'CANCEL_ON_CONNECTION_LOSS': 'o',
  'SUSPEND_ON_CONNECTION_LOSS': 'p',
  'RELEASE_FROM_SUSPENSION': 'q',
  'EXECUTE_AS_DELTA_NEUTRAL_USING_VOLATILITY_PROVIDED': 'r',
  'EXECUTE_AS_DURATION_NEUTRAL': 's',
  'EXECUTE_AS_FX_NEUTRAL': 't',
};

ExecInst.Tag = '18';

ExecInst.Type = 'MULTIPLECHARVALUE';

ExecInst.Values = invert(ExecInst.Keys);

module.exports = ExecInst;