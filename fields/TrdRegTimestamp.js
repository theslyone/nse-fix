var invert = require('invert-obj');

function TrdRegTimestamp (trdRegTimestamp) {
  this.message = trdRegTimestamp;
}

TrdRegTimestamp.prototype.value = function () {
  return this.message;
};

TrdRegTimestamp.Tag = '769';

TrdRegTimestamp.Type = 'UTCTIMESTAMP';

module.exports = TrdRegTimestamp;