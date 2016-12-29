var invert = require('invert-obj');

function ConfirmID (confirmId) {
  this.message = confirmId;
}

ConfirmID.prototype.value = function () {
  return this.message;
};

ConfirmID.Tag = '664';

ConfirmID.Type = 'STRING';

module.exports = ConfirmID;