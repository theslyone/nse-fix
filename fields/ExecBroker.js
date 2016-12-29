var invert = require('invert-obj');

function ExecBroker (execBroker) {
  this.message = execBroker;
}

ExecBroker.prototype.value = function () {
  return this.message;
};

ExecBroker.Tag = '76';

ExecBroker.Type = 'STRING';

module.exports = ExecBroker;