var invert = require('invert-obj');

function ListName (listName) {
  this.message = listName;
}

ListName.prototype.value = function () {
  return this.message;
};

ListName.Tag = '392';

ListName.Type = 'STRING';

module.exports = ListName;