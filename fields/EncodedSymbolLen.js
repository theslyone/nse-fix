var invert = require('invert-obj');

function EncodedSymbolLen (encodedSymbolLen) {
  this.message = encodedSymbolLen;
}

EncodedSymbolLen.prototype.value = function () {
  return this.message;
};

EncodedSymbolLen.Tag = '1359';

EncodedSymbolLen.Type = 'LENGTH';

module.exports = EncodedSymbolLen;