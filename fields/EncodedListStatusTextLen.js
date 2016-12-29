var invert = require('invert-obj');

function EncodedListStatusTextLen (encodedListStatusTextLen) {
  this.message = encodedListStatusTextLen;
}

EncodedListStatusTextLen.prototype.value = function () {
  return this.message;
};

EncodedListStatusTextLen.Tag = '445';

EncodedListStatusTextLen.Type = 'LENGTH';

module.exports = EncodedListStatusTextLen;