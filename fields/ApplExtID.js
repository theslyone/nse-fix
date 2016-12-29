var invert = require('invert-obj');

function ApplExtID (applExtId) {
  this.message = applExtId;
}

ApplExtID.prototype.value = function () {
  return this.message;
};

ApplExtID.Tag = '1156';

ApplExtID.Type = 'INT';

module.exports = ApplExtID;