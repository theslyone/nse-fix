var invert = require('invert-obj');

function MassCancelRequestType (massCancelRequestType) {
  this.message = massCancelRequestType;
}

MassCancelRequestType.prototype.value = function () {
  return this.message;
};


MassCancelRequestType.Keys = {
  'CANCEL_ORDERS_FOR_A_SECURITY': '1',
  'CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY': '2',
  'CANCEL_ORDERS_FOR_A_PRODUCT': '3',
  'CANCEL_ORDERS_FOR_A_CFICODE': '4',
  'CANCEL_ORDERS_FOR_A_SECURITYTYPE': '5',
  'CANCEL_ORDERS_FOR_A_TRADING_SESSION': '6',
  'CANCEL_ALL_ORDERS': '7',
  'CANCEL_ORDERS_FOR_A_MARKET': '8',
  'CANCEL_ORDERS_FOR_A_MARKET_SEGMENT': '9',
  'CANCEL_ORDERS_FOR_A_SECURITY_GROUP': 'A',
};

MassCancelRequestType.Tag = '530';

MassCancelRequestType.Type = 'CHAR';

MassCancelRequestType.Values = invert(MassCancelRequestType.Keys);

module.exports = MassCancelRequestType;