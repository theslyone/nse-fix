var invert = require('invert-obj');

function SecuritySubType (securitySubType) {
  this.message = securitySubType;
}

SecuritySubType.prototype.value = function () {
  return this.message;
};

SecuritySubType.Tag = '762';

SecuritySubType.Type = 'STRING';

module.exports = SecuritySubType;