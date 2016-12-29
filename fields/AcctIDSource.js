var invert = require('invert-obj');

function AcctIDSource (acctIdsource) {
  this.message = acctIdsource;
}

AcctIDSource.prototype.value = function () {
  return this.message;
};


AcctIDSource.Keys = {
  'BIC': '1',
  'SID_CODE': '2',
  'TFM': '3',
  'OMGEO': '4',
  'DTCC_CODE': '5',
  'OTHER': '99',
};

AcctIDSource.Tag = '660';

AcctIDSource.Type = 'INT';

AcctIDSource.Values = invert(AcctIDSource.Keys);

module.exports = AcctIDSource;