var invert = require('invert-obj');

function ApplReqType (applReqType) {
  this.message = applReqType;
}

ApplReqType.prototype.value = function () {
  return this.message;
};


ApplReqType.Keys = {
  'RETRANSMISSION_OF_APPLICATION_MESSAGES_FOR_THE_SPECIFIED_APPLICATIONS': '0',
  'SUBSCRIPTION_TO_THE_SPECIFIED_APPLICATIONS': '1',
  'REQUEST_FOR_THE_LAST_APPLLASTSEQNUM_PUBLISHED_FOR_THE_SPECIFIED_APPLICATIONS': '2',
  'REQUEST_VALID_SET_OF_APPLICATIONS': '3',
  'UNSUBSCRIBE_TO_THE_SPECIFIED_APPLICATIONS': '4',
};

ApplReqType.Tag = '1347';

ApplReqType.Type = 'INT';

ApplReqType.Values = invert(ApplReqType.Keys);

module.exports = ApplReqType;