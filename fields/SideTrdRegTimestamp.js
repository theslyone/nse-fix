var invert = require('invert-obj');

function SideTrdRegTimestamp (sideTrdRegTimestamp) {
  this.message = sideTrdRegTimestamp;
}

SideTrdRegTimestamp.prototype.value = function () {
  return this.message;
};

SideTrdRegTimestamp.Tag = '1012';

SideTrdRegTimestamp.Type = 'UTCTIMESTAMP';

module.exports = SideTrdRegTimestamp;