var invert = require('invert-obj');

function ExecTransType (execTransType) {
  this.message = execTransType;
}

ExecTransType.prototype.value = function () {
  return this.message;
};


ExecTransType.Keys = {
  'NEW': '0',
  'CANCEL': '1',
  'CORRECT': '2',
  'STATUS': '3',
};

ExecTransType.Tag = '20';

ExecTransType.Type = 'CHAR';

ExecTransType.Values = invert(ExecTransType.Keys);

module.exports = ExecTransType;