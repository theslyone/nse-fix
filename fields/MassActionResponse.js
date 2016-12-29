var invert = require('invert-obj');

function MassActionResponse (massActionResponse) {
  this.message = massActionResponse;
}

MassActionResponse.prototype.value = function () {
  return this.message;
};


MassActionResponse.Keys = {
  'REJECTED': '0',
  'ACCEPTED': '1',
};

MassActionResponse.Tag = '1375';

MassActionResponse.Type = 'INT';

MassActionResponse.Values = invert(MassActionResponse.Keys);

module.exports = MassActionResponse;