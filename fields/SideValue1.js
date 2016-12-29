var invert = require('invert-obj');

function SideValue1 (sideValue1) {
  this.message = sideValue1;
}

SideValue1.prototype.value = function () {
  return this.message;
};

SideValue1.Tag = '396';

SideValue1.Type = 'AMT';

module.exports = SideValue1;