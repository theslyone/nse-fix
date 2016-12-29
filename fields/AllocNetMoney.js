var invert = require('invert-obj');

function AllocNetMoney (allocNetMoney) {
  this.message = allocNetMoney;
}

AllocNetMoney.prototype.value = function () {
  return this.message;
};

AllocNetMoney.Tag = '154';

AllocNetMoney.Type = 'AMT';

module.exports = AllocNetMoney;