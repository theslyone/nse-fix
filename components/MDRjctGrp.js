var NoAltMDSource = require('../fields/NoAltMDSource');
var AltMDSourceID = require('../fields/AltMDSourceID');

function MDRjctGrp (mdrjctGrp) {
  this.message = mdrjctGrp;
}

/* group */

/* field */
MDRjctGrp.prototype.altMdsourceId = function () {
  return new AltMDSourceID(this.message.tags[AltMDSourceID.Tag]);
};

/* end group */

MDRjctGrp.Tag = '816';

module.exports = MDRjctGrp;