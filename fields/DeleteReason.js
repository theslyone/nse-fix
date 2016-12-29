var invert = require('invert-obj');

function DeleteReason (deleteReason) {
  this.message = deleteReason;
}

DeleteReason.prototype.value = function () {
  return this.message;
};


DeleteReason.Keys = {
  'CANCELLATION': '0',
  'ERROR': '1',
};

DeleteReason.Tag = '285';

DeleteReason.Type = 'CHAR';

DeleteReason.Values = invert(DeleteReason.Keys);

module.exports = DeleteReason;