var invert = require('invert-obj');

function MDSecSize (mdsecSize) {
  this.message = mdsecSize;
}

MDSecSize.prototype.value = function () {
  return this.message;
};

MDSecSize.Tag = '1179';

MDSecSize.Type = 'QTY';

module.exports = MDSecSize;