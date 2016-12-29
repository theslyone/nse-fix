var invert = require('invert-obj');

function SecurityDesc (securityDesc) {
  this.message = securityDesc;
}

SecurityDesc.prototype.value = function () {
  return this.message;
};

SecurityDesc.Tag = '107';

SecurityDesc.Type = 'STRING';

module.exports = SecurityDesc;