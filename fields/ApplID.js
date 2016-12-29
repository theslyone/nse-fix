var invert = require('invert-obj');

function ApplID (applId) {
  this.message = applId;
}

ApplID.prototype.value = function () {
  return this.message;
};

ApplID.Tag = '1180';

ApplID.Type = 'STRING';

module.exports = ApplID;