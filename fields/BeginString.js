var invert = require('invert-obj');

function BeginString (beginString) {
  this.message = beginString;
}

BeginString.prototype.value = function () {
  return this.message;
};

BeginString.Tag = '8';

BeginString.Type = 'STRING';

module.exports = BeginString;