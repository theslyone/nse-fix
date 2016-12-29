var invert = require('invert-obj');

function RelatdSym (relatdSym) {
  this.message = relatdSym;
}

RelatdSym.prototype.value = function () {
  return this.message;
};

RelatdSym.Tag = '46';

RelatdSym.Type = 'STRING';

module.exports = RelatdSym;