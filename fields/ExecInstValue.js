var invert = require('invert-obj');

function ExecInstValue (execInstValue) {
  this.message = execInstValue;
}

ExecInstValue.prototype.value = function () {
  return this.message;
};

ExecInstValue.Tag = '1308';

ExecInstValue.Type = 'CHAR';

module.exports = ExecInstValue;