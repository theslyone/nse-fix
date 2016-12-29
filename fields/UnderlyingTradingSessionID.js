var invert = require('invert-obj');

function UnderlyingTradingSessionID (underlyingTradingSessionId) {
  this.message = underlyingTradingSessionId;
}

UnderlyingTradingSessionID.prototype.value = function () {
  return this.message;
};

UnderlyingTradingSessionID.Tag = '822';

UnderlyingTradingSessionID.Type = 'STRING';

module.exports = UnderlyingTradingSessionID;