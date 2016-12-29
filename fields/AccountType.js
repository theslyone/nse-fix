var invert = require('invert-obj');

function AccountType (accountType) {
  this.message = accountType;
}

AccountType.prototype.value = function () {
  return this.message;
};


AccountType.Keys = {
  'ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_THE_BOOKS': '1',
  'ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS': '2',
  'HOUSE_TRADER': '3',
  'FLOOR_TRADER': '4',
  'ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED': '6',
  'ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED': '7',
  'JOINT_BACK_OFFICE_ACCOUNT': '8',
};

AccountType.Tag = '581';

AccountType.Type = 'INT';

AccountType.Values = invert(AccountType.Keys);

module.exports = AccountType;