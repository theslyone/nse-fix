var invert = require('invert-obj');

function SecondaryIndividualAllocID (secondaryIndividualAllocId) {
  this.message = secondaryIndividualAllocId;
}

SecondaryIndividualAllocID.prototype.value = function () {
  return this.message;
};

SecondaryIndividualAllocID.Tag = '989';

SecondaryIndividualAllocID.Type = 'STRING';

module.exports = SecondaryIndividualAllocID;