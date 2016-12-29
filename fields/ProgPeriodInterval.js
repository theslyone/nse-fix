var invert = require('invert-obj');

function ProgPeriodInterval (progPeriodInterval) {
  this.message = progPeriodInterval;
}

ProgPeriodInterval.prototype.value = function () {
  return this.message;
};

ProgPeriodInterval.Tag = '415';

ProgPeriodInterval.Type = 'INT';

module.exports = ProgPeriodInterval;