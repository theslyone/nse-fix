var invert = require('invert-obj');

function RejectText (rejectText) {
  this.message = rejectText;
}

RejectText.prototype.value = function () {
  return this.message;
};

RejectText.Tag = '1328';

RejectText.Type = 'STRING';

module.exports = RejectText;