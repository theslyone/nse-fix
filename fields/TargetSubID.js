var invert = require('invert-obj');

function TargetSubID (targetSubId) {
  this.message = targetSubId;
}

TargetSubID.prototype.value = function () {
  return this.message;
};

TargetSubID.Tag = '57';

TargetSubID.Type = 'STRING';

module.exports = TargetSubID;