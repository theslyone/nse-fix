var invert = require('invert-obj');

function EncryptMethod (encryptMethod) {
  this.message = encryptMethod;
}

EncryptMethod.prototype.value = function () {
  return this.message;
};


EncryptMethod.Keys = {
  'NONE': '0',
  'PKCS_1': '1',
  'DES': '2',
  'PKCS_3': '3',
  'PGP_4': '4',
  'PGP_5': '5',
  'PEM': '6',
};

EncryptMethod.Tag = '98';

EncryptMethod.Type = 'INT';

EncryptMethod.Values = invert(EncryptMethod.Keys);

module.exports = EncryptMethod;