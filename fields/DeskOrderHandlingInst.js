var invert = require('invert-obj');

function DeskOrderHandlingInst (deskOrderHandlingInst) {
  this.message = deskOrderHandlingInst;
}

DeskOrderHandlingInst.prototype.value = function () {
  return this.message;
};


DeskOrderHandlingInst.Keys = {
  'ADD_ON_ORDER': 'ADD',
  'ALL_OR_NONE': 'AON',
  'CASH_NOT_HELD': 'CNH',
  'DIRECTED_ORDER': 'DIR',
  'EXCHANGE_FOR_PHYSICAL_TRANSACTION': 'E.W',
  'FILL_OR_KILL': 'FOK',
  'IMBALANCE_ONLY': 'IO',
  'IMMEDIATE_OR_CANCEL': 'IOC',
  'LIMIT_ON_OPEN': 'LOO',
  'LIMIT_ON_CLOSE': 'LOC',
  'MARKET_AT_OPEN': 'MAO',
  'MARKET_AT_CLOSE': 'MAC',
  'MARKET_ON_OPEN': 'MOO',
  'MARKET_ON_CLOSE': 'MOC',
  'MINIMUM_QUANTITY': 'MQT',
  'NOT_HELD': 'NH',
  'OVER_THE_DAY': 'OVD',
  'PEGGED': 'PEG',
  'RESERVE_SIZE_ORDER': 'RSV',
  'STOP_STOCK_TRANSACTION': 'S.W',
  'SCALE': 'SCL',
  'TIME_ORDER': 'TMO',
  'TRAILING_STOP': 'TS',
  'WORK': 'WRK',
};

DeskOrderHandlingInst.Tag = '1035';

DeskOrderHandlingInst.Type = 'MULTIPLESTRINGVALUE';

DeskOrderHandlingInst.Values = invert(DeskOrderHandlingInst.Keys);

module.exports = DeskOrderHandlingInst;