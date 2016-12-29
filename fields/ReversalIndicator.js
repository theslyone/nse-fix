var invert = require('invert-obj');

function ReversalIndicator (reversalIndicator) {
  this.message = reversalIndicator;
}

ReversalIndicator.prototype.value = function () {
  return this.message;
};

ReversalIndicator.Tag = '700';

ReversalIndicator.Type = 'BOOLEAN';

module.exports = ReversalIndicator;