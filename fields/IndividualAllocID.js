var invert = require('invert-obj');

function IndividualAllocID (individualAllocId) {
  this.message = individualAllocId;
}

IndividualAllocID.prototype.value = function () {
  return this.message;
};

IndividualAllocID.Tag = '467';

IndividualAllocID.Type = 'STRING';

module.exports = IndividualAllocID;