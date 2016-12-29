var invert = require('invert-obj');

function TransferReason (transferReason) {
  this.message = transferReason;
}

TransferReason.prototype.value = function () {
  return this.message;
};

TransferReason.Tag = '830';

TransferReason.Type = 'STRING';

module.exports = TransferReason;