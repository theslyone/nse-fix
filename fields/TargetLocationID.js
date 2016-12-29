var invert = require('invert-obj');

function TargetLocationID (targetLocationId) {
  this.message = targetLocationId;
}

TargetLocationID.prototype.value = function () {
  return this.message;
};

TargetLocationID.Tag = '143';

TargetLocationID.Type = 'STRING';

module.exports = TargetLocationID;