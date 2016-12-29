var NoContraBrokers = require('../fields/NoContraBrokers');
var ContraBroker = require('../fields/ContraBroker');
var ContraTrader = require('../fields/ContraTrader');
var ContraTradeQty = require('../fields/ContraTradeQty');
var ContraTradeTime = require('../fields/ContraTradeTime');
var ContraLegRefID = require('../fields/ContraLegRefID');

function ContraGrp (contraGrp) {
  this.message = contraGrp;
}

/* group */

/* field */
ContraGrp.prototype.contraBroker = function () {
  return new ContraBroker(this.message.tags[ContraBroker.Tag]);
};

/* field */
ContraGrp.prototype.contraTrader = function () {
  return new ContraTrader(this.message.tags[ContraTrader.Tag]);
};

/* field */
ContraGrp.prototype.contraTradeQty = function () {
  return new ContraTradeQty(this.message.tags[ContraTradeQty.Tag]);
};

/* field */
ContraGrp.prototype.contraTradeTime = function () {
  return new ContraTradeTime(this.message.tags[ContraTradeTime.Tag]);
};

/* field */
ContraGrp.prototype.contraLegRefId = function () {
  return new ContraLegRefID(this.message.tags[ContraLegRefID.Tag]);
};

/* end group */

ContraGrp.Tag = '382';

module.exports = ContraGrp;