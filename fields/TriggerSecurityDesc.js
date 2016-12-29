var invert = require('invert-obj');

function TriggerSecurityDesc (triggerSecurityDesc) {
  this.message = triggerSecurityDesc;
}

TriggerSecurityDesc.prototype.value = function () {
  return this.message;
};

TriggerSecurityDesc.Tag = '1106';

TriggerSecurityDesc.Type = 'STRING';

module.exports = TriggerSecurityDesc;