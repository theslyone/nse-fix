var invert = require('invert-obj');

function ListMethod (listMethod) {
  this.message = listMethod;
}

ListMethod.prototype.value = function () {
  return this.message;
};


ListMethod.Keys = {
  'PRE_LISTED_ONLY': '0',
  'USER_REQUESTED': '1',
};

ListMethod.Tag = '1198';

ListMethod.Type = 'INT';

ListMethod.Values = invert(ListMethod.Keys);

module.exports = ListMethod;