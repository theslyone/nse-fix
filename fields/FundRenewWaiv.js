var invert = require('invert-obj');

function FundRenewWaiv (fundRenewWaiv) {
  this.message = fundRenewWaiv;
}

FundRenewWaiv.prototype.value = function () {
  return this.message;
};


FundRenewWaiv.Keys = {
  'NO': 'N',
  'YES': 'Y',
};

FundRenewWaiv.Tag = '497';

FundRenewWaiv.Type = 'CHAR';

FundRenewWaiv.Values = invert(FundRenewWaiv.Keys);

module.exports = FundRenewWaiv;