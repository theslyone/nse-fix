var invert = require('invert-obj');

function Text (text) {
  this.message = text;
}

Text.prototype.value = function () {
  return this.message;
};

Text.Tag = '58';

Text.Type = 'STRING';

module.exports = Text;