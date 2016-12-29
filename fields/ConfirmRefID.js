var invert = require('invert-obj');

function ConfirmRefID (confirmRefId) {
  this.message = confirmRefId;
}

ConfirmRefID.prototype.value = function () {
  return this.message;
};

ConfirmRefID.Tag = '772';

ConfirmRefID.Type = 'STRING';

module.exports = ConfirmRefID;