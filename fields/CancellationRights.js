var invert = require('invert-obj');

function CancellationRights (cancellationRights) {
  this.message = cancellationRights;
}

CancellationRights.prototype.value = function () {
  return this.message;
};


CancellationRights.Keys = {
  'NO_M': 'M',
  'NO_N': 'N',
  'NO_O': 'O',
  'YES': 'Y',
};

CancellationRights.Tag = '480';

CancellationRights.Type = 'CHAR';

CancellationRights.Values = invert(CancellationRights.Keys);

module.exports = CancellationRights;