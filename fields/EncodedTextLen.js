var invert = require('invert-obj');

function EncodedTextLen (encodedTextLen) {
  this.message = encodedTextLen;
}

EncodedTextLen.prototype.value = function () {
  return this.message;
};

EncodedTextLen.Tag = '354';

EncodedTextLen.Type = 'LENGTH';

module.exports = EncodedTextLen;