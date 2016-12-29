var invert = require('invert-obj');

function AllocAccountType (allocAccountType) {
  this.message = allocAccountType;
}

AllocAccountType.prototype.value = function () {
  return this.message;
};


AllocAccountType.Keys = {
  'ACCOUNT_IS_CARRIED_PN_CUSTOMER_SIDE_OF_BOOKS': '1',
  'ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS': '2',
  'HOUSE_TRADER': '3',
  'FLOOR_TRADER': '4',
  'ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED': '6',
  'ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED': '7',
  'JOINT_BACK_OFFICE_ACCOUNT': '8',
};

AllocAccountType.Tag = '798';

AllocAccountType.Type = 'INT';

AllocAccountType.Values = invert(AllocAccountType.Keys);

module.exports = AllocAccountType;