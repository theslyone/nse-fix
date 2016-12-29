var invert = require('invert-obj');

function RegistDtls (registDtls) {
  this.message = registDtls;
}

RegistDtls.prototype.value = function () {
  return this.message;
};

RegistDtls.Tag = '509';

RegistDtls.Type = 'STRING';

module.exports = RegistDtls;