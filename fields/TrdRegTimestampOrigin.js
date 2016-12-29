var invert = require('invert-obj');

function TrdRegTimestampOrigin (trdRegTimestampOrigin) {
  this.message = trdRegTimestampOrigin;
}

TrdRegTimestampOrigin.prototype.value = function () {
  return this.message;
};

TrdRegTimestampOrigin.Tag = '771';

TrdRegTimestampOrigin.Type = 'STRING';

module.exports = TrdRegTimestampOrigin;