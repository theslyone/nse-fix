var invert = require('invert-obj');

function CheckSum (checkSum) {
  this.message = checkSum;
}

CheckSum.prototype.value = function () {
  return this.message;
};

CheckSum.Tag = '10';

CheckSum.Type = 'STRING';

module.exports = CheckSum;