var NoEvents = require('../fields/NoEvents');
var EventType = require('../fields/EventType');
var EventDate = require('../fields/EventDate');
var EventPx = require('../fields/EventPx');
var EventText = require('../fields/EventText');
var EventTime = require('../fields/EventTime');

function EvntGrp (evntGrp) {
  this.message = evntGrp;
}

/* group */

/* field */
EvntGrp.prototype.eventType = function () {
  return new EventType(this.message.tags[EventType.Tag]);
};

/* field */
EvntGrp.prototype.eventDate = function () {
  return new EventDate(this.message.tags[EventDate.Tag]);
};

/* field */
EvntGrp.prototype.eventPx = function () {
  return new EventPx(this.message.tags[EventPx.Tag]);
};

/* field */
EvntGrp.prototype.eventText = function () {
  return new EventText(this.message.tags[EventText.Tag]);
};

/* field */
EvntGrp.prototype.eventTime = function () {
  return new EventTime(this.message.tags[EventTime.Tag]);
};

/* end group */

EvntGrp.Tag = '864';

module.exports = EvntGrp;