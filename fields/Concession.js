var invert = require('invert-obj');

function Concession (concession) {
  this.message = concession;
}

Concession.prototype.value = function () {
  return this.message;
};

Concession.Tag = '238';

Concession.Type = 'AMT';

module.exports = Concession;