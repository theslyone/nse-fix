var invert = require('invert-obj');

function SideTrdRegTimestampType (sideTrdRegTimestampType) {
  this.message = sideTrdRegTimestampType;
}

SideTrdRegTimestampType.prototype.value = function () {
  return this.message;
};

SideTrdRegTimestampType.Tag = '1013';

SideTrdRegTimestampType.Type = 'INT';

module.exports = SideTrdRegTimestampType;