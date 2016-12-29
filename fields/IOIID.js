var invert = require('invert-obj');

function IOIID (ioiid) {
  this.message = ioiid;
}

IOIID.prototype.value = function () {
  return this.message;
};

IOIID.Tag = '23';

IOIID.Type = 'STRING';

module.exports = IOIID;