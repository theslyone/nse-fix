var invert = require('invert-obj');

function LegalConfirm (legalConfirm) {
  this.message = legalConfirm;
}

LegalConfirm.prototype.value = function () {
  return this.message;
};


LegalConfirm.Keys = {
  'NO': 'N',
  'YES': 'Y',
};

LegalConfirm.Tag = '650';

LegalConfirm.Type = 'BOOLEAN';

LegalConfirm.Values = invert(LegalConfirm.Keys);

module.exports = LegalConfirm;