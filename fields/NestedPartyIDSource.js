var invert = require('invert-obj');

function NestedPartyIDSource (nestedPartyIdsource) {
  this.message = nestedPartyIdsource;
}

NestedPartyIDSource.prototype.value = function () {
  return this.message;
};

NestedPartyIDSource.Tag = '525';

NestedPartyIDSource.Type = 'CHAR';

module.exports = NestedPartyIDSource;