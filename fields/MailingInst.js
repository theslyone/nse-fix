var invert = require('invert-obj');

function MailingInst (mailingInst) {
  this.message = mailingInst;
}

MailingInst.prototype.value = function () {
  return this.message;
};

MailingInst.Tag = '482';

MailingInst.Type = 'STRING';

module.exports = MailingInst;