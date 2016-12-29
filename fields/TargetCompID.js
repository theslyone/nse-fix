var invert = require('invert-obj');

function TargetCompID (targetCompId) {
  this.message = targetCompId;
}

TargetCompID.prototype.value = function () {
  return this.message;
};

TargetCompID.Tag = '56';

TargetCompID.Type = 'STRING';

module.exports = TargetCompID;