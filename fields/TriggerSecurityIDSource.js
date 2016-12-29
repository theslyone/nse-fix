var invert = require('invert-obj');

function TriggerSecurityIDSource (triggerSecurityIdsource) {
  this.message = triggerSecurityIdsource;
}

TriggerSecurityIDSource.prototype.value = function () {
  return this.message;
};

TriggerSecurityIDSource.Tag = '1105';

TriggerSecurityIDSource.Type = 'STRING';

module.exports = TriggerSecurityIDSource;