var invert = require('invert-obj');

function TrdRegTimestampType (trdRegTimestampType) {
  this.message = trdRegTimestampType;
}

TrdRegTimestampType.prototype.value = function () {
  return this.message;
};


TrdRegTimestampType.Keys = {
  'EXECUTION_TIME': '1',
  'TIME_IN': '2',
  'TIME_OUT': '3',
  'BROKER_RECEIPT': '4',
  'BROKER_EXECUTION': '5',
  'DESK_RECEIPT': '6',
};

TrdRegTimestampType.Tag = '770';

TrdRegTimestampType.Type = 'INT';

TrdRegTimestampType.Values = invert(TrdRegTimestampType.Keys);

module.exports = TrdRegTimestampType;