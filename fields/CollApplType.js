var invert = require('invert-obj');

function CollApplType (collApplType) {
  this.message = collApplType;
}

CollApplType.prototype.value = function () {
  return this.message;
};


CollApplType.Keys = {
  'SPECIFIC_DEPOSIT': '0',
  'GENERAL': '1',
};

CollApplType.Tag = '1043';

CollApplType.Type = 'INT';

CollApplType.Values = invert(CollApplType.Keys);

module.exports = CollApplType;