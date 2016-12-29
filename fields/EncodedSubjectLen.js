var invert = require('invert-obj');

function EncodedSubjectLen (encodedSubjectLen) {
  this.message = encodedSubjectLen;
}

EncodedSubjectLen.prototype.value = function () {
  return this.message;
};

EncodedSubjectLen.Tag = '356';

EncodedSubjectLen.Type = 'LENGTH';

module.exports = EncodedSubjectLen;