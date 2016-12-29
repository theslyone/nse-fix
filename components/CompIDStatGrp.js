var NoCompIDs = require('../fields/NoCompIDs');
var RefCompID = require('../fields/RefCompID');
var RefSubID = require('../fields/RefSubID');
var LocationID = require('../fields/LocationID');
var DeskID = require('../fields/DeskID');
var StatusValue = require('../fields/StatusValue');
var StatusText = require('../fields/StatusText');

function CompIDStatGrp (compIdstatGrp) {
  this.message = compIdstatGrp;
}

/* group */

/* field */
CompIDStatGrp.prototype.refCompId = function () {
  return new RefCompID(this.message.tags[RefCompID.Tag]);
};

/* field */
CompIDStatGrp.prototype.refSubId = function () {
  return new RefSubID(this.message.tags[RefSubID.Tag]);
};

/* field */
CompIDStatGrp.prototype.locationId = function () {
  return new LocationID(this.message.tags[LocationID.Tag]);
};

/* field */
CompIDStatGrp.prototype.deskId = function () {
  return new DeskID(this.message.tags[DeskID.Tag]);
};

/* field */
CompIDStatGrp.prototype.statusValue = function () {
  return new StatusValue(this.message.tags[StatusValue.Tag]);
};

/* field */
CompIDStatGrp.prototype.statusText = function () {
  return new StatusText(this.message.tags[StatusText.Tag]);
};

/* end group */

CompIDStatGrp.Tag = '936';

module.exports = CompIDStatGrp;