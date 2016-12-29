var invert = require('invert-obj');

function DeskID (deskId) {
  this.message = deskId;
}

DeskID.prototype.value = function () {
  return this.message;
};

DeskID.Tag = '284';

DeskID.Type = 'STRING';

module.exports = DeskID;