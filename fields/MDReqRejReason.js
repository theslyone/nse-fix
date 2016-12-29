var invert = require('invert-obj');

function MDReqRejReason (mdreqRejReason) {
  this.message = mdreqRejReason;
}

MDReqRejReason.prototype.value = function () {
  return this.message;
};


MDReqRejReason.Keys = {
  'UNKNOWN_SYMBOL': '0',
  'DUPLICATE_MDREQID': '1',
  'INSUFFICIENT_BANDWIDTH': '2',
  'INSUFFICIENT_PERMISSIONS': '3',
  'UNSUPPORTED_SUBSCRIPTIONREQUESTTYPE': '4',
  'UNSUPPORTED_MARKETDEPTH': '5',
  'UNSUPPORTED_MDUPDATETYPE': '6',
  'UNSUPPORTED_AGGREGATEDBOOK': '7',
  'UNSUPPORTED_MDENTRYTYPE': '8',
  'UNSUPPORTED_TRADINGSESSIONID': '9',
  'UNSUPPORTED_SCOPE': 'A',
  'UNSUPPORTED_OPENCLOSESETTLEFLAG': 'B',
  'UNSUPPORTED_MDIMPLICITDELETE': 'C',
  'INSUFFICIENT_CREDIT': 'D',
};

MDReqRejReason.Tag = '281';

MDReqRejReason.Type = 'CHAR';

MDReqRejReason.Values = invert(MDReqRejReason.Keys);

module.exports = MDReqRejReason;