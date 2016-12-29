var invert = require('invert-obj');

function PublishTrdIndicator (publishTrdIndicator) {
  this.message = publishTrdIndicator;
}

PublishTrdIndicator.prototype.value = function () {
  return this.message;
};


PublishTrdIndicator.Keys = {
  'NO': 'N',
  'YES': 'Y',
};

PublishTrdIndicator.Tag = '852';

PublishTrdIndicator.Type = 'BOOLEAN';

PublishTrdIndicator.Values = invert(PublishTrdIndicator.Keys);

module.exports = PublishTrdIndicator;