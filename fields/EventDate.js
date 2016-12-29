var invert = require('invert-obj');

function EventDate (eventDate) {
  this.message = eventDate;
}

EventDate.prototype.value = function () {
  return this.message;
};

EventDate.Tag = '866';

EventDate.Type = 'LOCALMKTDATE';

module.exports = EventDate;