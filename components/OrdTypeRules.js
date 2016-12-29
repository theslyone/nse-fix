var NoOrdTypeRules = require('../fields/NoOrdTypeRules');
var OrdType = require('../fields/OrdType');

function OrdTypeRules (ordTypeRules) {
  this.message = ordTypeRules;
}

/* group */

/* field */
OrdTypeRules.prototype.ordType = function () {
  return new OrdType(this.message.tags[OrdType.Tag]);
};

/* end group */

OrdTypeRules.Tag = '1237';

module.exports = OrdTypeRules;