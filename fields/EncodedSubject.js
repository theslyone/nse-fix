var invert = require('invert-obj');

function EncodedSubject (encodedSubject) {
  this.message = encodedSubject;
}

EncodedSubject.prototype.value = function () {
  return this.message;
};

EncodedSubject.Tag = '357';

EncodedSubject.Type = 'DATA';

module.exports = EncodedSubject;