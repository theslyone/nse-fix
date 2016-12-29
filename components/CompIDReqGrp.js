var NoCompIDs = require('../fields/NoCompIDs');
var RefCompID = require('../fields/RefCompID');
var RefSubID = require('../fields/RefSubID');
var LocationID = require('../fields/LocationID');
var DeskID = require('../fields/DeskID');

function CompIDReqGrp (compIdreqGrp) {
  this.message = compIdreqGrp;
}

/* group */

/* field */
CompIDReqGrp.prototype.refCompId = function () {
  return new RefCompID(this.message.tags[RefCompID.Tag]);
};

/* field */
CompIDReqGrp.prototype.refSubId = function () {
  return new RefSubID(this.message.tags[RefSubID.Tag]);
};

/* field */
CompIDReqGrp.prototype.locationId = function () {
  return new LocationID(this.message.tags[LocationID.Tag]);
};

/* field */
CompIDReqGrp.prototype.deskId = function () {
  return new DeskID(this.message.tags[DeskID.Tag]);
};

/* end group */

CompIDReqGrp.Tag = '936';

module.exports = CompIDReqGrp;