var invert = require('invert-obj');

function MaxMessageSize (maxMessageSize) {
  this.message = maxMessageSize;
}

MaxMessageSize.prototype.value = function () {
  return this.message;
};

MaxMessageSize.Tag = '383';

MaxMessageSize.Type = 'LENGTH';

module.exports = MaxMessageSize;