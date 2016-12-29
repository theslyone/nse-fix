var invert = require('invert-obj');

function SecondaryFirmTradeID (secondaryFirmTradeId) {
  this.message = secondaryFirmTradeId;
}

SecondaryFirmTradeID.prototype.value = function () {
  return this.message;
};

SecondaryFirmTradeID.Tag = '1042';

SecondaryFirmTradeID.Type = 'STRING';

module.exports = SecondaryFirmTradeID;