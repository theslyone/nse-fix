var invert = require('invert-obj');

function Signature (signature) {
  this.message = signature;
}

Signature.prototype.value = function () {
  return this.message;
};

Signature.Tag = '89';

Signature.Type = 'DATA';

module.exports = Signature;