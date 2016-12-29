var invert = require('invert-obj');

function AgreementID (agreementId) {
  this.message = agreementId;
}

AgreementID.prototype.value = function () {
  return this.message;
};

AgreementID.Tag = '914';

AgreementID.Type = 'STRING';

module.exports = AgreementID;