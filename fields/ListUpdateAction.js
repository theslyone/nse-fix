var invert = require('invert-obj');

function ListUpdateAction (listUpdateAction) {
  this.message = listUpdateAction;
}

ListUpdateAction.prototype.value = function () {
  return this.message;
};

ListUpdateAction.Tag = '1324';

ListUpdateAction.Type = 'CHAR';

module.exports = ListUpdateAction;