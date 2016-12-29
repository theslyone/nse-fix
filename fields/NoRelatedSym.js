var invert = require('invert-obj');

function NoRelatedSym (noRelatedSym) {
  this.message = noRelatedSym;
}

NoRelatedSym.prototype.value = function () {
  return this.message;
};

NoRelatedSym.Tag = '146';

NoRelatedSym.Type = 'NUMINGROUP';

module.exports = NoRelatedSym;