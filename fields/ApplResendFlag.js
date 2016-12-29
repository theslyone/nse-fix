var invert = require('invert-obj');

function ApplResendFlag (applResendFlag) {
  this.message = applResendFlag;
}

ApplResendFlag.prototype.value = function () {
  return this.message;
};

ApplResendFlag.Tag = '1352';

ApplResendFlag.Type = 'BOOLEAN';

module.exports = ApplResendFlag;