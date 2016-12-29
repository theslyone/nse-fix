var invert = require('invert-obj');

function MassStatusReqType (massStatusReqType) {
  this.message = massStatusReqType;
}

MassStatusReqType.prototype.value = function () {
  return this.message;
};


MassStatusReqType.Keys = {
  'STATUS_FOR_ORDERS_FOR_A_SECURITY': '1',
  'STATUS_FOR_ORDERS_FOR_AN_UNDERLYING_SECURITY': '2',
  'STATUS_FOR_ORDERS_FOR_A_PRODUCT': '3',
  'STATUS_FOR_ORDERS_FOR_A_CFICODE': '4',
  'STATUS_FOR_ORDERS_FOR_A_SECURITYTYPE': '5',
  'STATUS_FOR_ORDERS_FOR_A_TRADING_SESSION': '6',
  'STATUS_FOR_ALL_ORDERS': '7',
  'STATUS_FOR_ORDERS_FOR_A_PARTYID': '8',
};

MassStatusReqType.Tag = '585';

MassStatusReqType.Type = 'INT';

MassStatusReqType.Values = invert(MassStatusReqType.Keys);

module.exports = MassStatusReqType;