var invert = require('invert-obj');

function AgreementCurrency (agreementCurrency) {
  this.message = agreementCurrency;
}

AgreementCurrency.prototype.value = function () {
  return this.message;
};

AgreementCurrency.Tag = '918';

AgreementCurrency.Type = 'CURRENCY';

module.exports = AgreementCurrency;