var SecondaryDisplayQty = require('../fields/SecondaryDisplayQty');
var DisplayWhen = require('../fields/DisplayWhen');
var DisplayMethod = require('../fields/DisplayMethod');
var DisplayLowQty = require('../fields/DisplayLowQty');
var DisplayHighQty = require('../fields/DisplayHighQty');
var DisplayMinIncr = require('../fields/DisplayMinIncr');
var RefreshQty = require('../fields/RefreshQty');
var DisplayQty = require('../fields/DisplayQty');

function DisplayInstruction (displayInstruction) {
  this.message = displayInstruction;
}
/* field */
DisplayInstruction.prototype.secondaryDisplayQty = function () {
  return new SecondaryDisplayQty(this.message.tags[SecondaryDisplayQty.Tag]);
};

/* field */
DisplayInstruction.prototype.displayWhen = function () {
  return new DisplayWhen(this.message.tags[DisplayWhen.Tag]);
};

/* field */
DisplayInstruction.prototype.displayMethod = function () {
  return new DisplayMethod(this.message.tags[DisplayMethod.Tag]);
};

/* field */
DisplayInstruction.prototype.displayLowQty = function () {
  return new DisplayLowQty(this.message.tags[DisplayLowQty.Tag]);
};

/* field */
DisplayInstruction.prototype.displayHighQty = function () {
  return new DisplayHighQty(this.message.tags[DisplayHighQty.Tag]);
};

/* field */
DisplayInstruction.prototype.displayMinIncr = function () {
  return new DisplayMinIncr(this.message.tags[DisplayMinIncr.Tag]);
};

/* field */
DisplayInstruction.prototype.refreshQty = function () {
  return new RefreshQty(this.message.tags[RefreshQty.Tag]);
};

/* field */
DisplayInstruction.prototype.displayQty = function () {
  return new DisplayQty(this.message.tags[DisplayQty.Tag]);
};



DisplayInstruction.Tag = '1082';

module.exports = DisplayInstruction;