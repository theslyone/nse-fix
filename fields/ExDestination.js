var invert = require('invert-obj');

function ExDestination (exDestination) {
  this.message = exDestination;
}

ExDestination.prototype.value = function () {
  return this.message;
};

ExDestination.Tag = '100';

ExDestination.Type = 'EXCHANGE';

module.exports = ExDestination;