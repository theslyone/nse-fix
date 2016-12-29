var invert = require('invert-obj');

function EmailType (emailType) {
  this.message = emailType;
}

EmailType.prototype.value = function () {
  return this.message;
};


EmailType.Keys = {
  'NEW': '0',
  'REPLY': '1',
  'ADMIN_REPLY': '2',
};

EmailType.Tag = '94';

EmailType.Type = 'CHAR';

EmailType.Values = invert(EmailType.Keys);

module.exports = EmailType;