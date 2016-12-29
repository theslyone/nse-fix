var invert = require('invert-obj');

function EncodedText (encodedText) {
  this.message = encodedText;
}

EncodedText.prototype.value = function () {
  return this.message;
};

EncodedText.Tag = '355';

EncodedText.Type = 'DATA';

module.exports = EncodedText;