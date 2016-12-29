var invert = require('invert-obj');

function Symbol (symbol) {
  this.message = symbol;
}

Symbol.prototype.value = function () {
  return this.message;
};

Symbol.Tag = '55';

Symbol.Type = 'STRING';

module.exports = Symbol;