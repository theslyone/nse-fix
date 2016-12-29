var invert = require('invert-obj');

function MassCancelResponse (massCancelResponse) {
  this.message = massCancelResponse;
}

MassCancelResponse.prototype.value = function () {
  return this.message;
};


MassCancelResponse.Keys = {
  'CANCEL_REQUEST_REJECTED': '0',
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

MassCancelResponse.Tag = '531';

MassCancelResponse.Type = 'CHAR';

MassCancelResponse.Values = invert(MassCancelResponse.Keys);

module.exports = MassCancelResponse;