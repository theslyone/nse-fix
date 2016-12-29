var invert = require('invert-obj');

function IndividualAllocType (individualAllocType) {
  this.message = individualAllocType;
}

IndividualAllocType.prototype.value = function () {
  return this.message;
};


IndividualAllocType.Keys = {
  'SUB_ALLOCATE': '1',
  'THIRD_PARTY_ALLOCATION': '2',
};

IndividualAllocType.Tag = '992';

IndividualAllocType.Type = 'INT';

IndividualAllocType.Values = invert(IndividualAllocType.Keys);

module.exports = IndividualAllocType;