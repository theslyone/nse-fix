var invert = require('invert-obj');

function NetMoney (netMoney) {
  this.message = netMoney;
}

NetMoney.prototype.value = function () {
  return this.message;
};

NetMoney.Tag = '118';

NetMoney.Type = 'AMT';

module.exports = NetMoney;