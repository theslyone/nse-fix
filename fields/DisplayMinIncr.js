var invert = require('invert-obj');

function DisplayMinIncr (displayMinIncr) {
  this.message = displayMinIncr;
}

DisplayMinIncr.prototype.value = function () {
  return this.message;
};

DisplayMinIncr.Tag = '1087';

DisplayMinIncr.Type = 'QTY';

module.exports = DisplayMinIncr;