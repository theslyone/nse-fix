var invert = require('invert-obj');

function EventType (eventType) {
  this.message = eventType;
}

EventType.prototype.value = function () {
  return this.message;
};


EventType.Keys = {
  'PUT': '1',
  'CALL': '2',
  'TENDER': '3',
  'SINKING_FUND_CALL': '4',
  'OTHER': '99',
  'ACTIVATION': '5',
  'INACTIVIATION': '6',
  'LAST_ELIGIBLE_TRADE_DATE': '7',
  'SWAP_START_DATE': '8',
  'SWAP_END_DATE': '9',
  'SWAP_NEXT_START_DATE': '11',
  'SWAP_ROLL_DATE': '10',
  'SWAP_NEXT_ROLL_DATE': '12',
  'FIRST_DELIVERY_DATE': '13',
  'LAST_DELIVERY_DATE': '14',
  'INITIAL_INVENTORY_DUE_DATE': '15',
  'FINAL_INVENTORY_DUE_DATE': '16',
  'FIRST_INTENT_DATE': '17',
  'LAST_INTENT_DATE': '18',
  'POSITION_REMOVAL_DATE': '19',
};

EventType.Tag = '865';

EventType.Type = 'INT';

EventType.Values = invert(EventType.Keys);

module.exports = EventType;