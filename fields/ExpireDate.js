var invert = require('invert-obj');

function ExpireDate (expireDate) {
  this.message = expireDate;
}

ExpireDate.prototype.value = function () {
  return this.message;
};

ExpireDate.Tag = '432';

ExpireDate.Type = 'LOCALMKTDATE';

module.exports = ExpireDate;