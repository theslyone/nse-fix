var invert = require('invert-obj');

function ListSeqNo (listSeqNo) {
  this.message = listSeqNo;
}

ListSeqNo.prototype.value = function () {
  return this.message;
};

ListSeqNo.Tag = '67';

ListSeqNo.Type = 'INT';

module.exports = ListSeqNo;