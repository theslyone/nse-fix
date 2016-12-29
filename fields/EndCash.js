var invert = require('invert-obj');

function EndCash (endCash) {
  this.message = endCash;
}

EndCash.prototype.value = function () {
  return this.message;
};

EndCash.Tag = '922';

EndCash.Type = 'AMT';

module.exports = EndCash;