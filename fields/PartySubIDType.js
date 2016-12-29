var invert = require('invert-obj');

function PartySubIDType (partySubIdtype) {
  this.message = partySubIdtype;
}

PartySubIDType.prototype.value = function () {
  return this.message;
};


PartySubIDType.Keys = {
  'FIRM': '1',
  'SECURITIES_ACCOUNT_NUMBER': '10',
  'REGISTRATION_NUMBER': '11',
  'REGISTERED_ADDRESS_12': '12',
  'REGULATORY_STATUS': '13',
  'REGISTRATION_NAME': '14',
  'CASH_ACCOUNT_NUMBER': '15',
  'BIC': '16',
  'CSD_PARTICIPANT_MEMBER_CODE': '17',
  'REGISTERED_ADDRESS_18': '18',
  'FUND_ACCOUNT_NAME': '19',
  'PERSON': '2',
  'TELEX_NUMBER': '20',
  'FAX_NUMBER': '21',
  'SECURITIES_ACCOUNT_NAME': '22',
  'CASH_ACCOUNT_NAME': '23',
  'DEPARTMENT': '24',
  'LOCATION_DESK': '25',
  'POSITION_ACCOUNT_TYPE': '26',
  'SYSTEM': '3',
  'APPLICATION': '4',
  'FULL_LEGAL_NAME_OF_FIRM': '5',
  'POSTAL_ADDRESS': '6',
  'PHONE_NUMBER': '7',
  'EMAIL_ADDRESS': '8',
  'CONTACT_NAME': '9',
  'SECURITY_LOCATE_ID': '27',
  'MARKET_MAKER': '28',
  'ELIGIBLE_COUNTERPARTY': '29',
  'PROFESSIONAL_CLIENT': '30',
  'LOCATION': '31',
  'EXECUTION_VENUE': '32',
  'CURRENCY_DELIVERY_IDENTIFIER': '33',
};

PartySubIDType.Tag = '803';

PartySubIDType.Type = 'INT';

PartySubIDType.Values = invert(PartySubIDType.Keys);

module.exports = PartySubIDType;