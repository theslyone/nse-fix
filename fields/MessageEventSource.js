var invert = require('invert-obj');

function MessageEventSource (messageEventSource) {
  this.message = messageEventSource;
}

MessageEventSource.prototype.value = function () {
  return this.message;
};

MessageEventSource.Tag = '1011';

MessageEventSource.Type = 'STRING';

module.exports = MessageEventSource;