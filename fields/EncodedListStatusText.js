var invert = require('invert-obj');

function EncodedListStatusText (encodedListStatusText) {
  this.message = encodedListStatusText;
}

EncodedListStatusText.prototype.value = function () {
  return this.message;
};

EncodedListStatusText.Tag = '446';

EncodedListStatusText.Type = 'DATA';

module.exports = EncodedListStatusText;