var invert = require('invert-obj');

function PrivateQuote (privateQuote) {
  this.message = privateQuote;
}

PrivateQuote.prototype.value = function () {
  return this.message;
};

PrivateQuote.Tag = '1171';

PrivateQuote.Type = 'BOOLEAN';

module.exports = PrivateQuote;