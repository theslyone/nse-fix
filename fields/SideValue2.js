var invert = require('invert-obj');

function SideValue2 (sideValue2) {
  this.message = sideValue2;
}

SideValue2.prototype.value = function () {
  return this.message;
};

SideValue2.Tag = '397';

SideValue2.Type = 'AMT';

module.exports = SideValue2;