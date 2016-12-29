var invert = require('invert-obj');

function MassCancelRejectReason (massCancelRejectReason) {
  this.message = massCancelRejectReason;
}

MassCancelRejectReason.prototype.value = function () {
  return this.message;
};


MassCancelRejectReason.Keys = {
  'MASS_CANCEL_NOT_SUPPORTED': '0',
  'INVALID_OR_UNKNOWN_SECURITY': '1',
  'INVALID_OR_UNKOWN_UNDERLYING_SECURITY': '2',
  'INVALID_OR_UNKNOWN_PRODUCT': '3',
  'INVALID_OR_UNKNOWN_CFICODE': '4',
  'INVALID_OR_UNKNOWN_SECURITYTYPE': '5',
  'INVALID_OR_UNKNOWN_TRADING_SESSION': '6',
  'OTHER': '99',
  'INVALID_OR_UNKNOWN_MARKET': '7',
  'INVALID_OR_UNKOWN_MARKET_SEGMENT': '8',
  'INVALID_OR_UNKNOWN_SECURITY_GROUP': '9',
};

MassCancelRejectReason.Tag = '532';

MassCancelRejectReason.Type = 'INT';

MassCancelRejectReason.Values = invert(MassCancelRejectReason.Keys);

module.exports = MassCancelRejectReason;