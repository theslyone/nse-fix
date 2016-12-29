var invert = require('invert-obj');

function NoApplIDs (noApplIds) {
  this.message = noApplIds;
}

NoApplIDs.prototype.value = function () {
  return this.message;
};

NoApplIDs.Tag = '1351';

NoApplIDs.Type = 'NUMINGROUP';

module.exports = NoApplIDs;