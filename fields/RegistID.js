var invert = require('invert-obj');

function RegistID (registId) {
  this.message = registId;
}

RegistID.prototype.value = function () {
  return this.message;
};

RegistID.Tag = '513';

RegistID.Type = 'STRING';

module.exports = RegistID;