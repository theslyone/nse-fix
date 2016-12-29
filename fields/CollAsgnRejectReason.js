var invert = require('invert-obj');

function CollAsgnRejectReason (collAsgnRejectReason) {
  this.message = collAsgnRejectReason;
}

CollAsgnRejectReason.prototype.value = function () {
  return this.message;
};


CollAsgnRejectReason.Keys = {
  'UNKNOWN_DEAL': '0',
  'UNKNOWN_OR_INVALID_INSTRUMENT': '1',
  'UNAUTHORIZED_TRANSACTION': '2',
  'INSUFFICIENT_COLLATERAL': '3',
  'INVALID_TYPE_OF_COLLATERAL': '4',
  'EXCESSIVE_SUBSTITUTION': '5',
  'OTHER': '99',
};

CollAsgnRejectReason.Tag = '906';

CollAsgnRejectReason.Type = 'INT';

CollAsgnRejectReason.Values = invert(CollAsgnRejectReason.Keys);

module.exports = CollAsgnRejectReason;