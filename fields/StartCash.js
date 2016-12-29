var invert = require('invert-obj');

function StartCash (startCash) {
  this.message = startCash;
}

StartCash.prototype.value = function () {
  return this.message;
};

StartCash.Tag = '921';

StartCash.Type = 'AMT';

module.exports = StartCash;