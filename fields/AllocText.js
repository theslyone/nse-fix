var invert = require('invert-obj');

function AllocText (allocText) {
  this.message = allocText;
}

AllocText.prototype.value = function () {
  return this.message;
};

AllocText.Tag = '161';

AllocText.Type = 'STRING';

module.exports = AllocText;