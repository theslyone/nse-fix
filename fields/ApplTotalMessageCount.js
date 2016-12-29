var invert = require('invert-obj');

function ApplTotalMessageCount (applTotalMessageCount) {
  this.message = applTotalMessageCount;
}

ApplTotalMessageCount.prototype.value = function () {
  return this.message;
};

ApplTotalMessageCount.Tag = '1349';

ApplTotalMessageCount.Type = 'INT';

module.exports = ApplTotalMessageCount;