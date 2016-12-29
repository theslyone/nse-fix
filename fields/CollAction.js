var invert = require('invert-obj');

function CollAction (collAction) {
  this.message = collAction;
}

CollAction.prototype.value = function () {
  return this.message;
};


CollAction.Keys = {
  'RETAIN': '0',
  'ADD': '1',
  'REMOVE': '2',
};

CollAction.Tag = '944';

CollAction.Type = 'INT';

CollAction.Values = invert(CollAction.Keys);

module.exports = CollAction;