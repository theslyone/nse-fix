var invert = require('invert-obj');

function EncodedHeadlineLen (encodedHeadlineLen) {
  this.message = encodedHeadlineLen;
}

EncodedHeadlineLen.prototype.value = function () {
  return this.message;
};

EncodedHeadlineLen.Tag = '358';

EncodedHeadlineLen.Type = 'LENGTH';

module.exports = EncodedHeadlineLen;