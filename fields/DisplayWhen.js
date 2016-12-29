var invert = require('invert-obj');

function DisplayWhen (displayWhen) {
  this.message = displayWhen;
}

DisplayWhen.prototype.value = function () {
  return this.message;
};


DisplayWhen.Keys = {
  'IMMEDIATE': '1',
  'EXHAUST': '2',
};

DisplayWhen.Tag = '1083';

DisplayWhen.Type = 'CHAR';

DisplayWhen.Values = invert(DisplayWhen.Keys);

module.exports = DisplayWhen;