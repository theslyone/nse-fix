var invert = require('invert-obj');

function MailingDtls (mailingDtls) {
  this.message = mailingDtls;
}

MailingDtls.prototype.value = function () {
  return this.message;
};

MailingDtls.Tag = '474';

MailingDtls.Type = 'STRING';

module.exports = MailingDtls;