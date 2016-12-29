var invert = require('invert-obj');

function TriggerSecurityID (triggerSecurityId) {
  this.message = triggerSecurityId;
}

TriggerSecurityID.prototype.value = function () {
  return this.message;
};

TriggerSecurityID.Tag = '1104';

TriggerSecurityID.Type = 'STRING';

module.exports = TriggerSecurityID;