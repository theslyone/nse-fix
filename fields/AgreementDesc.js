var invert = require('invert-obj');

function AgreementDesc (agreementDesc) {
  this.message = agreementDesc;
}

AgreementDesc.prototype.value = function () {
  return this.message;
};

AgreementDesc.Tag = '913';

AgreementDesc.Type = 'STRING';

module.exports = AgreementDesc;