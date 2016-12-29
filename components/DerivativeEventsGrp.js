var NoDerivativeEvents = require('../fields/NoDerivativeEvents');
var DerivativeEventType = require('../fields/DerivativeEventType');
var DerivativeEventDate = require('../fields/DerivativeEventDate');
var DerivativeEventTime = require('../fields/DerivativeEventTime');
var DerivativeEventPx = require('../fields/DerivativeEventPx');
var DerivativeEventText = require('../fields/DerivativeEventText');

function DerivativeEventsGrp (derivativeEventsGrp) {
  this.message = derivativeEventsGrp;
}

/* group */

/* field */
DerivativeEventsGrp.prototype.derivativeEventType = function () {
  return new DerivativeEventType(this.message.tags[DerivativeEventType.Tag]);
};

/* field */
DerivativeEventsGrp.prototype.derivativeEventDate = function () {
  return new DerivativeEventDate(this.message.tags[DerivativeEventDate.Tag]);
};

/* field */
DerivativeEventsGrp.prototype.derivativeEventTime = function () {
  return new DerivativeEventTime(this.message.tags[DerivativeEventTime.Tag]);
};

/* field */
DerivativeEventsGrp.prototype.derivativeEventPx = function () {
  return new DerivativeEventPx(this.message.tags[DerivativeEventPx.Tag]);
};

/* field */
DerivativeEventsGrp.prototype.derivativeEventText = function () {
  return new DerivativeEventText(this.message.tags[DerivativeEventText.Tag]);
};

/* end group */

DerivativeEventsGrp.Tag = '1286';

module.exports = DerivativeEventsGrp;