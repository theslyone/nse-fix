var invert = require('invert-obj');

function TrdMatchID (trdMatchId) {
  this.message = trdMatchId;
}

TrdMatchID.prototype.value = function () {
  return this.message;
};

TrdMatchID.Tag = '880';

TrdMatchID.Type = 'STRING';

module.exports = TrdMatchID;