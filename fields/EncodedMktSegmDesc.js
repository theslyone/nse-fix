var invert = require('invert-obj');

function EncodedMktSegmDesc (encodedMktSegmDesc) {
  this.message = encodedMktSegmDesc;
}

EncodedMktSegmDesc.prototype.value = function () {
  return this.message;
};

EncodedMktSegmDesc.Tag = '1398';

EncodedMktSegmDesc.Type = 'DATA';

module.exports = EncodedMktSegmDesc;