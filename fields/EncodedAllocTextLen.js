var invert = require('invert-obj');

function EncodedAllocTextLen (encodedAllocTextLen) {
  this.message = encodedAllocTextLen;
}

EncodedAllocTextLen.prototype.value = function () {
  return this.message;
};

EncodedAllocTextLen.Tag = '360';

EncodedAllocTextLen.Type = 'LENGTH';

module.exports = EncodedAllocTextLen;