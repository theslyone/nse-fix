var invert = require('invert-obj');

function BookingUnit (bookingUnit) {
  this.message = bookingUnit;
}

BookingUnit.prototype.value = function () {
  return this.message;
};


BookingUnit.Keys = {
  'EACH_PARTIAL_EXECUTION_IS_A_BOOKABLE_UNIT': '0',
  'AGGREGATE_PARTIAL_EXECUTIONS_ON_THIS_ORDER_AND_BOOK_ONE_TRADE_PER_ORDER': '1',
  'AGGREGATE_EXECUTIONS_FOR_THIS_SYMBOL_SIDE_AND_SETTLEMENT_DATE': '2',
};

BookingUnit.Tag = '590';

BookingUnit.Type = 'CHAR';

BookingUnit.Values = invert(BookingUnit.Keys);

module.exports = BookingUnit;