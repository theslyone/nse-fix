var invert = require('invert-obj');

function RegistAcctType (registAcctType) {
  this.message = registAcctType;
}

RegistAcctType.prototype.value = function () {
  return this.message;
};

RegistAcctType.Tag = '493';

RegistAcctType.Type = 'STRING';

module.exports = RegistAcctType;