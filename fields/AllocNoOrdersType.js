var invert = require('invert-obj');

function AllocNoOrdersType (allocNoOrdersType) {
  this.message = allocNoOrdersType;
}

AllocNoOrdersType.prototype.value = function () {
  return this.message;
};


AllocNoOrdersType.Keys = {
  'NOT_SPECIFIED': '0',
  'EXPLICIT_LIST_PROVIDED': '1',
};

AllocNoOrdersType.Tag = '857';

AllocNoOrdersType.Type = 'INT';

AllocNoOrdersType.Values = invert(AllocNoOrdersType.Keys);

module.exports = AllocNoOrdersType;