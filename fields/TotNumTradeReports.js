var invert = require('invert-obj');

function TotNumTradeReports (totNumTradeReports) {
  this.message = totNumTradeReports;
}

TotNumTradeReports.prototype.value = function () {
  return this.message;
};

TotNumTradeReports.Tag = '748';

TotNumTradeReports.Type = 'INT';

module.exports = TotNumTradeReports;