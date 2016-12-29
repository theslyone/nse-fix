var invert = require('invert-obj');

function SideTrdRegTimestampSrc (sideTrdRegTimestampSrc) {
  this.message = sideTrdRegTimestampSrc;
}

SideTrdRegTimestampSrc.prototype.value = function () {
  return this.message;
};

SideTrdRegTimestampSrc.Tag = '1014';

SideTrdRegTimestampSrc.Type = 'STRING';

module.exports = SideTrdRegTimestampSrc;