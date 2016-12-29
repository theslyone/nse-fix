var invert = require('invert-obj');

function PosMaintAction (posMaintAction) {
  this.message = posMaintAction;
}

PosMaintAction.prototype.value = function () {
  return this.message;
};


PosMaintAction.Keys = {
  'NEW': '1',
  'REPLACE': '2',
  'CANCEL': '3',
  'REVERSE': '4',
};

PosMaintAction.Tag = '712';

PosMaintAction.Type = 'INT';

PosMaintAction.Values = invert(PosMaintAction.Keys);

module.exports = PosMaintAction;