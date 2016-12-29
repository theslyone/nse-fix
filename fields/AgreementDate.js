var invert = require('invert-obj');

function AgreementDate (agreementDate) {
  this.message = agreementDate;
}

AgreementDate.prototype.value = function () {
  return this.message;
};

AgreementDate.Tag = '915';

AgreementDate.Type = 'LOCALMKTDATE';

module.exports = AgreementDate;