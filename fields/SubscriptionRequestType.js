var invert = require('invert-obj');

function SubscriptionRequestType (subscriptionRequestType) {
  this.message = subscriptionRequestType;
}

SubscriptionRequestType.prototype.value = function () {
  return this.message;
};


SubscriptionRequestType.Keys = {
  'SNAPSHOT': '0',
  'SNAPSHOT_PLUS_UPDATES': '1',
  'DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST': '2',
};

SubscriptionRequestType.Tag = '263';

SubscriptionRequestType.Type = 'CHAR';

SubscriptionRequestType.Values = invert(SubscriptionRequestType.Keys);

module.exports = SubscriptionRequestType;