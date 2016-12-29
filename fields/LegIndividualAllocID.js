var invert = require('invert-obj');

function LegIndividualAllocID (legIndividualAllocId) {
  this.message = legIndividualAllocId;
}

LegIndividualAllocID.prototype.value = function () {
  return this.message;
};

LegIndividualAllocID.Tag = '672';

LegIndividualAllocID.Type = 'STRING';

module.exports = LegIndividualAllocID;