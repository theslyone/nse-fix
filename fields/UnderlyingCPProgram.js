var invert = require('invert-obj');

function UnderlyingCPProgram (underlyingCpprogram) {
  this.message = underlyingCpprogram;
}

UnderlyingCPProgram.prototype.value = function () {
  return this.message;
};

UnderlyingCPProgram.Tag = '877';

UnderlyingCPProgram.Type = 'STRING';

module.exports = UnderlyingCPProgram;