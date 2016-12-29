var invert = require('invert-obj');

function BookingType (bookingType) {
  this.message = bookingType;
}

BookingType.prototype.value = function () {
  return this.message;
};


BookingType.Keys = {
  'REGULAR_BOOKING': '0',
  'CFD': '1',
  'TOTAL_RETURN_SWAP': '2',
};

BookingType.Tag = '775';

BookingType.Type = 'INT';

BookingType.Values = invert(BookingType.Keys);

module.exports = BookingType;