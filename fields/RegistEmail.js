var invert = require('invert-obj');

function RegistEmail (registEmail) {
  this.message = registEmail;
}

RegistEmail.prototype.value = function () {
  return this.message;
};

RegistEmail.Tag = '511';

RegistEmail.Type = 'STRING';

module.exports = RegistEmail;