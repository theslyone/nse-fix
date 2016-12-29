var invert = require('invert-obj');

function IOIOthSvc (ioiothSvc) {
  this.message = ioiothSvc;
}

IOIOthSvc.prototype.value = function () {
  return this.message;
};

IOIOthSvc.Tag = '24';

IOIOthSvc.Type = 'CHAR';

module.exports = IOIOthSvc;