var invert = require('invert-obj');

function TradeLegRefID (tradeLegRefId) {
  this.message = tradeLegRefId;
}

TradeLegRefID.prototype.value = function () {
  return this.message;
};

TradeLegRefID.Tag = '824';

TradeLegRefID.Type = 'STRING';

module.exports = TradeLegRefID;