var invert = require('invert-obj');

function HaltReasonChar (haltReasonChar) {
  this.message = haltReasonChar;
}

HaltReasonChar.prototype.value = function () {
  return this.message;
};


HaltReasonChar.Keys = {
  'NEWS_DISSEMINATION': 'D',
  'ORDER_INFLUX': 'E',
  'ORDER_IMBALANCE': 'I',
  'ADDITIONAL_INFORMATION': 'M',
  'NEW_PENDING': 'P',
  'EQUIPMENT_CHANGEOVER': 'X',
};

HaltReasonChar.Tag = '327';

HaltReasonChar.Type = 'CHAR';

HaltReasonChar.Values = invert(HaltReasonChar.Keys);

module.exports = HaltReasonChar;