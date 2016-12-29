var invert = require('invert-obj');

function MessageEncoding (messageEncoding) {
  this.message = messageEncoding;
}

MessageEncoding.prototype.value = function () {
  return this.message;
};

MessageEncoding.Tag = '347';

MessageEncoding.Type = 'STRING';

module.exports = MessageEncoding;