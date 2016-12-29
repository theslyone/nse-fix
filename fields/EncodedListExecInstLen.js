var invert = require('invert-obj');

function EncodedListExecInstLen (encodedListExecInstLen) {
  this.message = encodedListExecInstLen;
}

EncodedListExecInstLen.prototype.value = function () {
  return this.message;
};

EncodedListExecInstLen.Tag = '352';

EncodedListExecInstLen.Type = 'LENGTH';

module.exports = EncodedListExecInstLen;