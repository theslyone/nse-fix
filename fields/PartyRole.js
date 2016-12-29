var invert = require('invert-obj');

function PartyRole (partyRole) {
  this.message = partyRole;
}

PartyRole.prototype.value = function () {
  return this.message;
};


PartyRole.Keys = {
  'EXECUTING_FIRM': '1',
  'SETTLEMENT_LOCATION': '10',
  'ORDER_ORIGINATION_TRADER': '11',
  'EXECUTING_TRADER': '12',
  'ORDER_ORIGINATION_FIRM': '13',
  'GIVEUP_CLEARING_FIRM': '14',
  'CORRESPONDANT_CLEARING_FIRM': '15',
  'EXECUTING_SYSTEM': '16',
  'CONTRA_FIRM': '17',
  'CONTRA_CLEARING_FIRM': '18',
  'SPONSORING_FIRM': '19',
  'BROKER_OF_CREDIT': '2',
  'UNDERLYING_CONTRA_FIRM': '20',
  'CLEARING_ORGANIZATION': '21',
  'EXCHANGE': '22',
  'CUSTOMER_ACCOUNT': '24',
  'CORRESPONDENT_CLEARING_ORGANIZATION': '25',
  'CORRESPONDENT_BROKER': '26',
  'BUYER_SELLER': '27',
  'CUSTODIAN': '28',
  'INTERMEDIARY': '29',
  'CLIENT_ID': '3',
  'AGENT': '30',
  'SUB_CUSTODIAN': '31',
  'BENEFICIARY': '32',
  'INTERESTED_PARTY': '33',
  'REGULATORY_BODY': '34',
  'LIQUIDITY_PROVIDER': '35',
  'ENTERING_TRADER': '36',
  'CONTRA_TRADER': '37',
  'POSITION_ACCOUNT': '38',
  'CLEARING_FIRM': '4',
  'INVESTOR_ID': '5',
  'INTRODUCING_FIRM': '6',
  'ENTERING_FIRM': '7',
  'LOCATE': '8',
  'FUND_MANAGER_CLIENT_ID': '9',
  'INTRODUCING_BROKER': '60',
  'CONTRA_POSITION_ACCOUNT': '41',
  'CONTRA_EXCHANGE': '42',
  'INTERNAL_CARRY_ACCOUNT': '43',
  'ORDER_ENTRY_OPERATOR_ID': '44',
  'SECONDARY_ACCOUNT_NUMBER': '45',
  'FORIEGN_FIRM': '46',
  'THIRD_PARTY_ALLOCATION_FIRM': '47',
  'CLAIMING_ACCOUNT': '48',
  'ASSET_MANAGER': '49',
  'PLEDGOR_ACCOUNT': '50',
  'PLEDGEE_ACCOUNT': '51',
  'LARGE_TRADER_REPORTABLE_ACCOUNT': '52',
  'TRADER_MNEMONIC': '53',
  'SENDER_LOCATION': '54',
  'SESSION_ID': '55',
  'ACCEPTABLE_COUNTERPARTY': '56',
  'UNACCEPTABLE_COUNTERPARTY': '57',
  'ENTERING_UNIT': '58',
  'EXECUTING_UNIT': '59',
  'CONTRA_INVESTOR_ID': '39',
  'TRANSFER_TO_FIRM': '40',
  'QUOTE_ORIGINATOR': '61',
  'REPORT_ORIGINATOR': '62',
  'SYSTEMATIC_INTERNALISER': '63',
  'MULTILATERAL_TRADING_FACILITY': '64',
  'REGULATED_MARKET': '65',
  'MARKET_MAKER': '66',
  'INVESTMENT_FIRM': '67',
  'HOST_COMPETENT_AUTHORITY': '68',
  'HOME_COMPETENT_AUTHORITY': '69',
  'COMPETENT_AUTHORITY_OF_THE_MOST_RELEVANT_MARKET_IN_TERMS_OF_LIQUIDITY': '70',
  'COMPETENT_AUTHORITY_OF_THE_TRANSACTION': '71',
  'REPORTING_INTERMEDIARY': '72',
  'EXECUTION_VENUE': '73',
  'MARKET_DATA_ENTRY_ORIGINATOR': '74',
  'LOCATION_ID': '75',
  'DESK_ID': '76',
  'MARKET_DATA_MARKET': '77',
  'ALLOCATION_ENTITY': '78',
  'PRIME_BROKER_PROVIDING_GENERAL_TRADE_SERVICES': '79',
  'STEP_OUT_FIRM': '80',
  'BROKERCLEARINGID': '81',
};

PartyRole.Tag = '452';

PartyRole.Type = 'INT';

PartyRole.Values = invert(PartyRole.Keys);

module.exports = PartyRole;