var invert = require('invert-obj');

function HeartBtInt (heartBtInt) {
  this.message = heartBtInt;
}

HeartBtInt.prototype.value = function () {
  return this.message;
};

HeartBtInt.Tag = '108';

HeartBtInt.Type = 'INT';

module.exports = HeartBtInt;