var invert = require('invert-obj');

function AllocCancReplaceReason (allocCancReplaceReason) {
  this.message = allocCancReplaceReason;
}

AllocCancReplaceReason.prototype.value = function () {
  return this.message;
};


AllocCancReplaceReason.Keys = {
  'ORIGINAL_DETAILS_INCOMPLETE_INCORRECT': '1',
  'CHANGE_IN_UNDERLYING_ORDER_DETAILS': '2',
  'OTHER': '99',
};

AllocCancReplaceReason.Tag = '796';

AllocCancReplaceReason.Type = 'INT';

AllocCancReplaceReason.Values = invert(AllocCancReplaceReason.Keys);

module.exports = AllocCancReplaceReason;