var invert = require('invert-obj');

function TriggerTradingSessionSubID (triggerTradingSessionSubId) {
  this.message = triggerTradingSessionSubId;
}

TriggerTradingSessionSubID.prototype.value = function () {
  return this.message;
};

TriggerTradingSessionSubID.Tag = '1114';

TriggerTradingSessionSubID.Type = 'STRING';

module.exports = TriggerTradingSessionSubID;