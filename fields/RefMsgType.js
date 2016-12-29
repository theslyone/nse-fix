var invert = require('invert-obj');

function RefMsgType (refMsgType) {
  this.message = refMsgType;
}

RefMsgType.prototype.value = function () {
  return this.message;
};

RefMsgType.Tag = '372';

RefMsgType.Type = 'STRING';

module.exports = RefMsgType;