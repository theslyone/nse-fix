var invert = require('invert-obj');

function RegistRejReasonText (registRejReasonText) {
  this.message = registRejReasonText;
}

RegistRejReasonText.prototype.value = function () {
  return this.message;
};

RegistRejReasonText.Tag = '496';

RegistRejReasonText.Type = 'STRING';

module.exports = RegistRejReasonText;