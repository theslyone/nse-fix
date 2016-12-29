var invert = require('invert-obj');

function EncodedAllocText (encodedAllocText) {
  this.message = encodedAllocText;
}

EncodedAllocText.prototype.value = function () {
  return this.message;
};

EncodedAllocText.Tag = '361';

EncodedAllocText.Type = 'DATA';

module.exports = EncodedAllocText;