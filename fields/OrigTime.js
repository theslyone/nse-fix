var invert = require('invert-obj');

function OrigTime (origTime) {
  this.message = origTime;
}

OrigTime.prototype.value = function () {
  return this.message;
};

OrigTime.Tag = '42';

OrigTime.Type = 'UTCTIMESTAMP';

module.exports = OrigTime;