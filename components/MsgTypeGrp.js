var NoMsgTypes = require('../fields/NoMsgTypes');
var RefMsgType = require('../fields/RefMsgType');
var MsgDirection = require('../fields/MsgDirection');
var RefApplVerID = require('../fields/RefApplVerID');
var RefCstmApplVerID = require('../fields/RefCstmApplVerID');
var RefApplExtID = require('../fields/RefApplExtID');
var DefaultVerIndicator = require('../fields/DefaultVerIndicator');

function MsgTypeGrp (msgTypeGrp) {
  this.message = msgTypeGrp;
}

/* group */

/* field */
MsgTypeGrp.prototype.refMsgType = function () {
  return new RefMsgType(this.message.tags[RefMsgType.Tag]);
};

/* field */
MsgTypeGrp.prototype.msgDirection = function () {
  return new MsgDirection(this.message.tags[MsgDirection.Tag]);
};

/* field */
MsgTypeGrp.prototype.refApplVerId = function () {
  return new RefApplVerID(this.message.tags[RefApplVerID.Tag]);
};

/* field */
MsgTypeGrp.prototype.refCstmApplVerId = function () {
  return new RefCstmApplVerID(this.message.tags[RefCstmApplVerID.Tag]);
};

/* field */
MsgTypeGrp.prototype.refApplExtId = function () {
  return new RefApplExtID(this.message.tags[RefApplExtID.Tag]);
};

/* field */
MsgTypeGrp.prototype.defaultVerIndicator = function () {
  return new DefaultVerIndicator(this.message.tags[DefaultVerIndicator.Tag]);
};

/* end group */

MsgTypeGrp.Tag = '384';

module.exports = MsgTypeGrp;