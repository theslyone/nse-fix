var invert = require('invert-obj');

function SecurityID (securityId) {
  this.message = securityId;
}

SecurityID.prototype.value = function () {
  return this.message;
};

SecurityID.Tag = '48';

SecurityID.Type = 'STRING';

module.exports = SecurityID;