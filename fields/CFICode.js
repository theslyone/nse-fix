var invert = require('invert-obj');

function CFICode (cficode) {
  this.message = cficode;
}

CFICode.prototype.value = function () {
  return this.message;
};

CFICode.Tag = '461';

CFICode.Type = 'STRING';

module.exports = CFICode;