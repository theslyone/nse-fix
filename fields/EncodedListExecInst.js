var invert = require('invert-obj');

function EncodedListExecInst (encodedListExecInst) {
  this.message = encodedListExecInst;
}

EncodedListExecInst.prototype.value = function () {
  return this.message;
};

EncodedListExecInst.Tag = '353';

EncodedListExecInst.Type = 'DATA';

module.exports = EncodedListExecInst;