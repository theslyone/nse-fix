var invert = require('invert-obj');

function FirmTradeID (firmTradeId) {
  this.message = firmTradeId;
}

FirmTradeID.prototype.value = function () {
  return this.message;
};

FirmTradeID.Tag = '1041';

FirmTradeID.Type = 'STRING';

module.exports = FirmTradeID;