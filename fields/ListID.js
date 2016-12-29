var invert = require('invert-obj');

function ListID (listId) {
  this.message = listId;
}

ListID.prototype.value = function () {
  return this.message;
};

ListID.Tag = '66';

ListID.Type = 'STRING';

module.exports = ListID;