var invert = require('invert-obj');

function BookingRefID (bookingRefId) {
  this.message = bookingRefId;
}

BookingRefID.prototype.value = function () {
  return this.message;
};

BookingRefID.Tag = '466';

BookingRefID.Type = 'STRING';

module.exports = BookingRefID;