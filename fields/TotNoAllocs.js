var invert = require('invert-obj');

function TotNoAllocs (totNoAllocs) {
  this.message = totNoAllocs;
}

TotNoAllocs.prototype.value = function () {
  return this.message;
};

TotNoAllocs.Tag = '892';

TotNoAllocs.Type = 'INT';

module.exports = TotNoAllocs;