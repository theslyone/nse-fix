var invert = require('invert-obj');

function OwnershipType (ownershipType) {
  this.message = ownershipType;
}

OwnershipType.prototype.value = function () {
  return this.message;
};


OwnershipType.Keys = {
  'JOINT_TRUSTEES': '2',
  'JOINT_INVESTORS': 'J',
  'TENANTS_IN_COMMON': 'T',
};

OwnershipType.Tag = '517';

OwnershipType.Type = 'CHAR';

OwnershipType.Values = invert(OwnershipType.Keys);

module.exports = OwnershipType;