var invert = require('invert-obj');

function CopyMsgIndicator (copyMsgIndicator) {
  this.message = copyMsgIndicator;
}

CopyMsgIndicator.prototype.value = function () {
  return this.message;
};

CopyMsgIndicator.Tag = '797';

CopyMsgIndicator.Type = 'BOOLEAN';

module.exports = CopyMsgIndicator;