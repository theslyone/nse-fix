var invert = require('invert-obj');

function TimeUnit (timeUnit) {
  this.message = timeUnit;
}

TimeUnit.prototype.value = function () {
  return this.message;
};


TimeUnit.Keys = {
  'SECOND': 'S',
  'MINUTE': 'Min',
  'HOUR': 'H',
  'DAY': 'D',
  'WEEK': 'Wk',
  'MONTH': 'Mo',
  'YEAR': 'Yr',
};

TimeUnit.Tag = '997';

TimeUnit.Type = 'STRING';

TimeUnit.Values = invert(TimeUnit.Keys);

module.exports = TimeUnit;