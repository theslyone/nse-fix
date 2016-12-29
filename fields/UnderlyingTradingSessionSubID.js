var invert = require('invert-obj');

function UnderlyingTradingSessionSubID (underlyingTradingSessionSubId) {
  this.message = underlyingTradingSessionSubId;
}

UnderlyingTradingSessionSubID.prototype.value = function () {
  return this.message;
};

UnderlyingTradingSessionSubID.Tag = '823';

UnderlyingTradingSessionSubID.Type = 'STRING';

module.exports = UnderlyingTradingSessionSubID;