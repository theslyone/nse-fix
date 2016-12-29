var invert = require('invert-obj');

function TestReqID (testReqId) {
  this.message = testReqId;
}

TestReqID.prototype.value = function () {
  return this.message;
};

TestReqID.Tag = '112';

TestReqID.Type = 'STRING';

module.exports = TestReqID;