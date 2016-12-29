var invert = require('invert-obj');

function NoRegistDtls (noRegistDtls) {
  this.message = noRegistDtls;
}

NoRegistDtls.prototype.value = function () {
  return this.message;
};

NoRegistDtls.Tag = '473';

NoRegistDtls.Type = 'NUMINGROUP';

module.exports = NoRegistDtls;