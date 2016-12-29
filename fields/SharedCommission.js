var invert = require('invert-obj');

function SharedCommission (sharedCommission) {
  this.message = sharedCommission;
}

SharedCommission.prototype.value = function () {
  return this.message;
};

SharedCommission.Tag = '858';

SharedCommission.Type = 'AMT';

module.exports = SharedCommission;