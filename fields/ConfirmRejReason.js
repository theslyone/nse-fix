var invert = require('invert-obj');

function ConfirmRejReason (confirmRejReason) {
  this.message = confirmRejReason;
}

ConfirmRejReason.prototype.value = function () {
  return this.message;
};


ConfirmRejReason.Keys = {
  'MISMATCHED_ACCOUNT': '1',
  'MISSING_SETTLEMENT_INSTRUCTIONS': '2',
  'OTHER': '99',
};

ConfirmRejReason.Tag = '774';

ConfirmRejReason.Type = 'INT';

ConfirmRejReason.Values = invert(ConfirmRejReason.Keys);

module.exports = ConfirmRejReason;