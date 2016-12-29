var invert = require('invert-obj');

function EncodedHeadline (encodedHeadline) {
  this.message = encodedHeadline;
}

EncodedHeadline.prototype.value = function () {
  return this.message;
};

EncodedHeadline.Tag = '359';

EncodedHeadline.Type = 'DATA';

module.exports = EncodedHeadline;