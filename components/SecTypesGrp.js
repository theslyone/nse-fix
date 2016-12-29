var NoSecurityTypes = require('../fields/NoSecurityTypes');
var SecurityType = require('../fields/SecurityType');
var SecuritySubType = require('../fields/SecuritySubType');
var Product = require('../fields/Product');
var CFICode = require('../fields/CFICode');

function SecTypesGrp (secTypesGrp) {
  this.message = secTypesGrp;
}

/* group */

/* field */
SecTypesGrp.prototype.securityType = function () {
  return new SecurityType(this.message.tags[SecurityType.Tag]);
};

/* field */
SecTypesGrp.prototype.securitySubType = function () {
  return new SecuritySubType(this.message.tags[SecuritySubType.Tag]);
};

/* field */
SecTypesGrp.prototype.product = function () {
  return new Product(this.message.tags[Product.Tag]);
};

/* field */
SecTypesGrp.prototype.cficode = function () {
  return new CFICode(this.message.tags[CFICode.Tag]);
};

/* end group */

SecTypesGrp.Tag = '558';

module.exports = SecTypesGrp;