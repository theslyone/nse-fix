var invert = require('invert-obj');

function RptSys (rptSys) {
  this.message = rptSys;
}

RptSys.prototype.value = function () {
  return this.message;
};

RptSys.Tag = '1135';

RptSys.Type = 'STRING';

module.exports = RptSys;