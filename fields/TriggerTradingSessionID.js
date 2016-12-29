var invert = require('invert-obj');

function TriggerTradingSessionID (triggerTradingSessionId) {
  this.message = triggerTradingSessionId;
}

TriggerTradingSessionID.prototype.value = function () {
  return this.message;
};

TriggerTradingSessionID.Tag = '1113';

TriggerTradingSessionID.Type = 'STRING';

module.exports = TriggerTradingSessionID;