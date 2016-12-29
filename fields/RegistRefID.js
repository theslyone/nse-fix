var invert = require('invert-obj');

function RegistRefID (registRefId) {
  this.message = registRefId;
}

RegistRefID.prototype.value = function () {
  return this.message;
};

RegistRefID.Tag = '508';

RegistRefID.Type = 'STRING';

module.exports = RegistRefID;