var invert = require('invert-obj');

function DayBookingInst (dayBookingInst) {
  this.message = dayBookingInst;
}

DayBookingInst.prototype.value = function () {
  return this.message;
};


DayBookingInst.Keys = {
  'CAN_TRIGGER_BOOKING_WITHOUT_REFERENCE_TO_THE_ORDER_INITIATOR': '0',
  'SPEAK_WITH_ORDER_INITIATOR_BEFORE_BOOKING': '1',
  'ACCUMULATE': '2',
};

DayBookingInst.Tag = '589';

DayBookingInst.Type = 'CHAR';

DayBookingInst.Values = invert(DayBookingInst.Keys);

module.exports = DayBookingInst;