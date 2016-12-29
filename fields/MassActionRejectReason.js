var invert = require('invert-obj');

function MassActionRejectReason (massActionRejectReason) {
  this.message = massActionRejectReason;
}

MassActionRejectReason.prototype.value = function () {
  return this.message;
};


MassActionRejectReason.Keys = {
  'MASS_ACTION_NOT_SUPPORTED': '0',
  'INVALID_OR_UNKNOWN_SECURITY': '1',
  'INVALID_OR_UNKNOWN_UNDERLYING_SECURITY': '2',
  'INVALID_OR_UNKNOWN_PRODUCT': '3',
  'INVALID_OR_UNKNOWN_CFICODE': '4',
  'INVALID_OR_UNKNOWN_SECURITYTYPE': '5',
  'INVALID_OR_UNKNOWN_TRADING_SESSION': '6',
  'INVALID_OR_UNKNOWN_MARKET': '7',
  'INVALID_OR_UNKNOWN_MARKET_SEGMENT': '8',
  'INVALID_OR_UNKNOWN_SECURITY_GROUP': '9',
  'OTHER': '99',
};

MassActionRejectReason.Tag = '1376';

MassActionRejectReason.Type = 'INT';

MassActionRejectReason.Values = invert(MassActionRejectReason.Keys);

module.exports = MassActionRejectReason;