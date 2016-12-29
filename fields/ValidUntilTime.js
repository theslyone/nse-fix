var invert = require('invert-obj');

function ValidUntilTime (validUntilTime) {
  this.message = validUntilTime;
}

ValidUntilTime.prototype.value = function () {
  return this.message;
};

ValidUntilTime.Tag = '62';

ValidUntilTime.Type = 'UTCTIMESTAMP';

module.exports = ValidUntilTime;