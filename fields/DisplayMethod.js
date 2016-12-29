var invert = require('invert-obj');

function DisplayMethod (displayMethod) {
  this.message = displayMethod;
}

DisplayMethod.prototype.value = function () {
  return this.message;
};


DisplayMethod.Keys = {
  'INITIAL': '1',
  'NEW': '2',
  'RANDOM': '3',
};

DisplayMethod.Tag = '1084';

DisplayMethod.Type = 'CHAR';

DisplayMethod.Values = invert(DisplayMethod.Keys);

module.exports = DisplayMethod;