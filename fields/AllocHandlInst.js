var invert = require('invert-obj');

function AllocHandlInst (allocHandlInst) {
  this.message = allocHandlInst;
}

AllocHandlInst.prototype.value = function () {
  return this.message;
};


AllocHandlInst.Keys = {
  'MATCH': '1',
  'FORWARD': '2',
  'FORWARD_AND_MATCH': '3',
};

AllocHandlInst.Tag = '209';

AllocHandlInst.Type = 'INT';

AllocHandlInst.Values = invert(AllocHandlInst.Keys);

module.exports = AllocHandlInst;