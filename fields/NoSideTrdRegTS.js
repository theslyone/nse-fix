var invert = require('invert-obj');

function NoSideTrdRegTS (noSideTrdRegTs) {
  this.message = noSideTrdRegTs;
}

NoSideTrdRegTS.prototype.value = function () {
  return this.message;
};

NoSideTrdRegTS.Tag = '1016';

NoSideTrdRegTS.Type = 'NUMINGROUP';

module.exports = NoSideTrdRegTS;