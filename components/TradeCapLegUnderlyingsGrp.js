var NoOfLegUnderlyings = require('../fields/NoOfLegUnderlyings');
var UnderlyingLegInstrument = require('../components/UnderlyingLegInstrument');

function TradeCapLegUnderlyingsGrp (tradeCapLegUnderlyingsGrp) {
  this.message = tradeCapLegUnderlyingsGrp;
}

/* group */

/* component */
TradeCapLegUnderlyingsGrp.prototype.underlyingLegInstrument = function () {
  return this.message.groups[UnderlyingLegInstrument.Tag]
    .map(function (underlyingLegInstrument) {
      return new UnderlyingLegInstrument(underlyingLegInstrument);
  });
};

/* end group */

TradeCapLegUnderlyingsGrp.Tag = '1342';

module.exports = TradeCapLegUnderlyingsGrp;