var invert = require('invert-obj');

function EventPx (eventPx) {
  this.message = eventPx;
}

EventPx.prototype.value = function () {
  return this.message;
};

EventPx.Tag = '867';

EventPx.Type = 'PRICE';

module.exports = EventPx;