var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var FinancingDetails = require('../components/FinancingDetails');
var SecLstUpdRelSymsLegGrp = require('../components/SecLstUpdRelSymsLegGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var Stipulations = require('../components/Stipulations');
var SecurityTradingRules = require('../components/SecurityTradingRules');
var StrikeRules = require('../components/StrikeRules');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var Currency = require('../fields/Currency');
var ListUpdateAction = require('../fields/ListUpdateAction');

function SecLstUpdRelSymGrp (secLstUpdRelSymGrp) {
  this.message = secLstUpdRelSymGrp;
}

/* group */

/* component */
SecLstUpdRelSymGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
SecLstUpdRelSymGrp.prototype.instrumentExtension = function () {
  return this.message.groups[InstrumentExtension.Tag]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

/* component */
SecLstUpdRelSymGrp.prototype.financingDetails = function () {
  return this.message.groups[FinancingDetails.Tag]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

/* component */
SecLstUpdRelSymGrp.prototype.secLstUpdRelSymsLegGrp = function () {
  return this.message.groups[SecLstUpdRelSymsLegGrp.Tag]
    .map(function (secLstUpdRelSymsLegGrp) {
      return new SecLstUpdRelSymsLegGrp(secLstUpdRelSymsLegGrp);
  });
};

/* component */
SecLstUpdRelSymGrp.prototype.spreadOrBenchmarkCurveData = function () {
  return this.message.groups[SpreadOrBenchmarkCurveData.Tag]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

/* component */
SecLstUpdRelSymGrp.prototype.yieldData = function () {
  return this.message.groups[YieldData.Tag]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

/* component */
SecLstUpdRelSymGrp.prototype.undInstrmtGrp = function () {
  return this.message.groups[UndInstrmtGrp.Tag]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

/* component */
SecLstUpdRelSymGrp.prototype.stipulations = function () {
  return this.message.groups[Stipulations.Tag]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

/* component */
SecLstUpdRelSymGrp.prototype.securityTradingRules = function () {
  return this.message.groups[SecurityTradingRules.Tag]
    .map(function (securityTradingRules) {
      return new SecurityTradingRules(securityTradingRules);
  });
};

/* component */
SecLstUpdRelSymGrp.prototype.strikeRules = function () {
  return this.message.groups[StrikeRules.Tag]
    .map(function (strikeRules) {
      return new StrikeRules(strikeRules);
  });
};

/* field */
SecLstUpdRelSymGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
SecLstUpdRelSymGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
SecLstUpdRelSymGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* field */
SecLstUpdRelSymGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
SecLstUpdRelSymGrp.prototype.listUpdateAction = function () {
  return new ListUpdateAction(this.message.tags[ListUpdateAction.Tag]);
};

/* end group */

SecLstUpdRelSymGrp.Tag = '146';

module.exports = SecLstUpdRelSymGrp;