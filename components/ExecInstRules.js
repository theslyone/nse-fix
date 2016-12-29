var NoExecInstRules = require('../fields/NoExecInstRules');
var ExecInstValue = require('../fields/ExecInstValue');

function ExecInstRules (execInstRules) {
  this.message = execInstRules;
}

/* group */

/* field */
ExecInstRules.prototype.execInstValue = function () {
  return new ExecInstValue(this.message.tags[ExecInstValue.Tag]);
};

/* end group */

ExecInstRules.Tag = '1232';

module.exports = ExecInstRules;