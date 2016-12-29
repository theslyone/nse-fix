var invert = require('invert-obj');

function MaturityNetMoney (maturityNetMoney) {
  this.message = maturityNetMoney;
}

MaturityNetMoney.prototype.value = function () {
  return this.message;
};

MaturityNetMoney.Tag = '890';

MaturityNetMoney.Type = 'AMT';

module.exports = MaturityNetMoney;