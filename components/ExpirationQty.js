var NoExpiration = require('../fields/NoExpiration');
var ExpirationQtyType = require('../fields/ExpirationQtyType');
var ExpQty = require('../fields/ExpQty');

function ExpirationQty (expirationQty) {
  this.message = expirationQty;
}

/* group */

/* field */
ExpirationQty.prototype.expirationQtyType = function () {
  return new ExpirationQtyType(this.message.tags[ExpirationQtyType.Tag]);
};

/* field */
ExpirationQty.prototype.expQty = function () {
  return new ExpQty(this.message.tags[ExpQty.Tag]);
};

/* end group */

ExpirationQty.Tag = '981';

module.exports = ExpirationQty;