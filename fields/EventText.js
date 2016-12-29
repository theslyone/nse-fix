var invert = require('invert-obj');

function EventText (eventText) {
  this.message = eventText;
}

EventText.prototype.value = function () {
  return this.message;
};

EventText.Tag = '868';

EventText.Type = 'STRING';

module.exports = EventText;