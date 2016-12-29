var invert = require('invert-obj');

function PegMoveType (pegMoveType) {
  this.message = pegMoveType;
}

PegMoveType.prototype.value = function () {
  return this.message;
};


PegMoveType.Keys = {
  'FLOATING': '0',
  'FIXED': '1',
};

PegMoveType.Tag = '835';

PegMoveType.Type = 'INT';

PegMoveType.Values = invert(PegMoveType.Keys);

module.exports = PegMoveType;