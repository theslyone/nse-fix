var invert = require('invert-obj');

function ResponseDestination (responseDestination) {
  this.message = responseDestination;
}

ResponseDestination.prototype.value = function () {
  return this.message;
};

ResponseDestination.Tag = '726';

ResponseDestination.Type = 'STRING';

module.exports = ResponseDestination;