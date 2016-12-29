var invert = require('invert-obj');

function ParentMktSegmID (parentMktSegmId) {
  this.message = parentMktSegmId;
}

ParentMktSegmID.prototype.value = function () {
  return this.message;
};

ParentMktSegmID.Tag = '1325';

ParentMktSegmID.Type = 'STRING';

module.exports = ParentMktSegmID;