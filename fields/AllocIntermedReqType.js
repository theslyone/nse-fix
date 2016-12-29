var invert = require('invert-obj');

function AllocIntermedReqType (allocIntermedReqType) {
  this.message = allocIntermedReqType;
}

AllocIntermedReqType.prototype.value = function () {
  return this.message;
};


AllocIntermedReqType.Keys = {
  'PENDING_ACCEPT': '1',
  'PENDING_RELEASE': '2',
  'PENDING_REVERSAL': '3',
  'ACCEPT': '4',
  'BLOCK_LEVEL_REJECT': '5',
  'ACCOUNT_LEVEL_REJECT': '6',
};

AllocIntermedReqType.Tag = '808';

AllocIntermedReqType.Type = 'INT';

AllocIntermedReqType.Values = invert(AllocIntermedReqType.Keys);

module.exports = AllocIntermedReqType;