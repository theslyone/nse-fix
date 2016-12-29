var invert = require('invert-obj');

function EncodedMktSegmDescLen (encodedMktSegmDescLen) {
  this.message = encodedMktSegmDescLen;
}

EncodedMktSegmDescLen.prototype.value = function () {
  return this.message;
};

EncodedMktSegmDescLen.Tag = '1397';

EncodedMktSegmDescLen.Type = 'LENGTH';

module.exports = EncodedMktSegmDescLen;