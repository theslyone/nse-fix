var invert = require('invert-obj');

function MDFeedType (mdfeedType) {
  this.message = mdfeedType;
}

MDFeedType.prototype.value = function () {
  return this.message;
};

MDFeedType.Tag = '1022';

MDFeedType.Type = 'STRING';

module.exports = MDFeedType;