var invert = require('invert-obj');

function ListExecInst (listExecInst) {
  this.message = listExecInst;
}

ListExecInst.prototype.value = function () {
  return this.message;
};

ListExecInst.Tag = '69';

ListExecInst.Type = 'STRING';

module.exports = ListExecInst;