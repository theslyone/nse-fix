var invert = require('invert-obj');

function CustOrderCapacity (custOrderCapacity) {
  this.message = custOrderCapacity;
}

CustOrderCapacity.prototype.value = function () {
  return this.message;
};


CustOrderCapacity.Keys = {
  'MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT': '1',
  'CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT': '2',
  'MEMBER_TRADING_FOR_ANOTHER_MEMBER': '3',
  'ALL_OTHER': '4',
};

CustOrderCapacity.Tag = '582';

CustOrderCapacity.Type = 'INT';

CustOrderCapacity.Values = invert(CustOrderCapacity.Keys);

module.exports = CustOrderCapacity;