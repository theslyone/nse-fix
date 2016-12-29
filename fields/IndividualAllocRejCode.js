var invert = require('invert-obj');

function IndividualAllocRejCode (individualAllocRejCode) {
  this.message = individualAllocRejCode;
}

IndividualAllocRejCode.prototype.value = function () {
  return this.message;
};

IndividualAllocRejCode.Tag = '776';

IndividualAllocRejCode.Type = 'INT';

module.exports = IndividualAllocRejCode;