var invert = require('invert-obj');

function EventTime (eventTime) {
  this.message = eventTime;
}

EventTime.prototype.value = function () {
  return this.message;
};

EventTime.Tag = '1145';

EventTime.Type = 'UTCTIMESTAMP';

module.exports = EventTime;