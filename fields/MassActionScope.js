var invert = require('invert-obj');

function MassActionScope (massActionScope) {
  this.message = massActionScope;
}

MassActionScope.prototype.value = function () {
  return this.message;
};


MassActionScope.Keys = {
  'ALL_ORDERS_FOR_A_SECURITY': '1',
  'ALL_ORDERS_FOR_AN_UNDERLYING_SECURITY': '2',
  'ALL_ORDERS_FOR_A_PRODUCT': '3',
  'ALL_ORDERS_FOR_A_CFICODE': '4',
  'ALL_ORDERS_FOR_A_SECURITYTYPE': '5',
  'ALL_ORDERS_FOR_A_TRADING_SESSION': '6',
  'ALL_ORDERS': '7',
  'ALL_ORDERS_FOR_A_MARKET': '8',
  'ALL_ORDERS_FOR_A_MARKET_SEGMENT': '9',
  'ALL_ORDERS_FOR_A_SECURITY_GROUP': '10',
};

MassActionScope.Tag = '1374';

MassActionScope.Type = 'INT';

MassActionScope.Values = invert(MassActionScope.Keys);

module.exports = MassActionScope;