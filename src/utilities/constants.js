// state conventions
// '*' at the end: calculated value based on available datas
//    es. '23*' for dates, trans_numbers, percentages
//    es. `${o.EUR}23*` for prices
// `${o.EUR}23`: prices
// '-' : not applicable
// '' : data not found
// '12%' percentages
// 0 : when anything equals to zero the value is stored as integer
// '∞' : unlimited
//
// time: INTEGER (days)
// percentages: FLOAT (%)

// colors
export const PRIMARY = '#4F87FB'
export const PRIMARY_DARKER = '#326DE7'
export const TEXT = '#19243B'
export const SECONDARY = ''
export const GREY_DARK = '#19243B'
export const GREY_MEDIUM = '#DEE2ED'
export const GREY_LIGHT = '#F6F9FA'

// contentType
export const WORD = 'word'
export const PARAGRAPH = 'paragraph'
export const PRICE = 'price'
export const PERCENTAGE = 'percentage'
export const TICK = 'tick'
export const TIME = 'time'
export const IMAGE = 'image'
export const NUMBER = 'number'

// state
export const PLASTIC = 'Plastic'
export const VIRTUAL = 'Virtual'
export const VISA = 'Visa'
export const MASTERCARD = 'Mastercard'
export const IOS = 'iOS'
export const ANDROID = 'Android'
export const WEBAPP = 'Web App'
export const EUR = 'EUR'
export const USD = 'USD'
export const GBP = 'GBP'
export const BTC = 'BTC'
export const LTC = 'LTC'

// Companies
export const WIREX = 'Wirex'

// Column IDs, on the right it must be the same as the state key, otherwhise the sorting won't work
export const CARD_ID = 'cardID'
export const COMPANY = 'company'
export const CARD_NAME = 'cardName'
export const CARD_ISSUER = 'cardIssuer'
export const SPENDING_CURRENCY = 'spendingCurrency'

export const CARD_TYPE = 'cardType'
export const PREPAID_OR_INSTANT_CRYPTO = 'instantCryptoPayment'

export const VERIFICATION_TYPE = 'verificaionType'
export const ADDRESS_REQUIRED = 'addressRequired'
export const ANNUAL_COST = 'annualFee'

export const CARD_ISSUANCE_PRICE = 'cardIssuancePrice'
export const CARD_ISSUANCE_TIME = 'cardIssuanceTime'
export const CARD_DELIVERY_STD_PRICE = 'cardDeliveryStdPrice'
export const CARD_DELIVERY_STD_TIME_MIN = 'cardDeliveryStdTimeMin'
export const CARD_DELIVERY_STD_TIME_MAX = 'cardDeliveryStdTimeMax'
export const CARD_DELIVERY_EXP_PRICE = 'cardDeliveryExpPrice'
export const CARD_DELIVERY_EXP_TIME_MIN = 'cardDeliveryExpTimeMin'
export const CARD_DELIVERY_EXP_TIME_MAX = 'cardDeliveryExpTimeMax'
export const CARD_REPLACEMENT_STD_PRICE = 'cardReplacementStdPrice'
export const CARD_REPLACEMENT_STD_TIME = 'cardReplacementStdTime'
export const CARD_REPLACEMENT_EXP_PRICE = 'cardReplacementExpPrice'
export const CARD_REPLACEMENT_EXP_TIME = 'cardReplacementExpTime'
export const CURRENCY_CONVERSION = 'currencyConversion'
export const CONNECTED_WALLETS = 'connectedWallets'
export const TWO_FACTORS_AUTH = 'twoFactorsAuth'
export const APP = 'APP'
export const CASH_BACK = 'cashBack'
export const PIN_CHANGE = 'pinChange'

export const ATM_DOMESTIC_WIDTHRAWAL_FEE = 'ATM_Domestic_Widthrawal_Fee'
export const ATM_INTERNATIONAL_WITHDRAWAL_FEE = 'ATM_International_Withdrawal_Fee'
export const ATM_BALANCEINQUIRY_FEE = 'ATM_BalanceInquiry_Fee'
export const ATM_TRANSACTIONNUMBER_SINGLE = 'ATM_TransactionNumber_Single'
export const ATM_TRANSACTIONNUMBER_24H = 'ATM_TransactionNumber_24h'
export const ATM_TRANSACTIONNUMBER_MONTH = 'ATM_TransactionNumber_Month'
export const ATM_TRANSACTIONNUMBER_YEAR = 'ATM_TransactionNumber_Year'
export const ATM_TRANSACTIONNUMBER_LIFETIME = 'ATM_TransactionNumber_Lifetime'
export const ATM_WITHDRAWALAMOUNT_SINGLE = 'ATM_WithdrawalAmount_Single'
export const ATM_WITHDRAWALAMOUNT_24H = 'ATM_WithdrawalAmount_24h'
export const ATM_WITHDRAWALAMOUNT_MONTH = 'ATM_WithdrawalAmount_Month'
export const ATM_WITHDRAWALAMOUNT_YEAR = 'ATM_WithdrawalAmount_Year'
export const ATM_WITHDRAWALAMOUNT_LIFETIME = 'ATM_WithdrawalAmount_Lifetime'
export const PURCHASES_TOTAL_NUMBER_24H = 'Purchases_Total_number_24h'
export const PURCHASES_TOTAL_NUMBER_MONTH = 'Purchases_Total_number_month'
export const PURCHASES_TOTAL_NUMBER_YEAR = 'Purchases_Total_number_year'
export const PURCHASES_TOTAL_NUMBER_LIFETIME = 'Purchases_Total_number_lifetime'
export const PURCHASES_TOTAL_SPENDING_SINGLE = 'Purchases_Total_spending_single'
export const PURCHASES_TOTAL_SPENDING_24H = 'Purchases_Total_spending_24h'
export const PURCHASES_TOTAL_SPENDING_MONTH = 'Purchases_Total_spending_month'
export const PURCHASES_TOTAL_SPENDING_YEAR = 'Purchases_Total_spending_year'
export const PURCHASES_TOTAL_SPENDING_LIFETIME = 'Purchases_Total_spending_lifetime'
export const PURCHASES_OFFLINE_NUMBER_24H = 'Purchases_Offline_number_24h'
export const PURCHASES_OFFLINE_NUMBER_YEAR = 'Purchases_Offline_number_year'
export const PURCHASES_OFFLINE_NUMBER_LIFETIME = 'Purchases_Offline_number_lifetime'
export const PURCHASES_OFFLINE_SPENDING_SINGLE = 'Purchases_Offline_spending_single'
export const PURCHASES_OFFLINE_SPENDING_24H = 'Purchases_Offline_spending_24h'
export const PURCHASES_OFFLINE_SPENDING_YEAR = 'Purchases_Offline_spending_year'
export const PURCHASES_OFFLINE_SPENDING_LIFETIME = 'Purchases_Offline_spending_lifetime'
export const PURCHASES_ONLINE_NUMBER_24H = 'Purchases_Online_number_24h'
export const PURCHASES_ONLINE_NUMBER_YEAR = 'Purchases_Online_number_year'
export const PURCHASES_ONLINE_NUMBER_LIFETIME = 'Purchases_Online_number_lifetime'
export const PURCHASES_ONLINE_SPENDING_SINGLE = 'Purchases_Online_spending_single'
export const PURCHASES_ONLINE_SPENDING_24H = 'Purchases_Online_spending_24h'
export const PURCHASES_ONLINE_SPENDING_YEAR = 'Purchases_Online_spending_year'
export const PURCHASES_ONLINE_SPENDING_LIFETIME = 'Purchases_Online_spending_lifetime'
export const WALLETLOAD_TOTAL_AMOUNT = 'WalletLoad_Total_amount'
export const WALLETUNLOAD_TOTAL_AMOUNT = 'WalletUnload_Total_amount'
export const CARDLOAD_TOTAL_AMOUNT = 'CardLoad_Total_amount'
export const CARRDUNLOAD_TOTAL_AMOUNT = 'CarrdUnload_Total_amount'
export const WALLETLOAD_TYPES = 'WalletLoad_Types'
export const WALLETLOAD_CARD_AVAILABLE = 'WalletLoad_Card_available'
export const WALLETLOAD_CARD_FEE = 'WalletLoad_Card_fee'
export const WALLETLOAD_CARD_AMOUNT_24H = 'WalletLoad_Card_amount_24h'
export const WALLETLOAD_CARD_AMOUNT_SINGLE = 'WalletLoad_Card_amount_single'
export const WALLETLOAD_CARD_AMOUNT_LIFETIME = 'WalletLoad_Card_amount_lifetime'
export const WALLETLOAD_CARD_NUMBER_24H = 'WalletLoad_Card_number_24h'
export const WALLETLOAD_CARD_NUMBER_SINGLE = 'WalletLoad_Card_number_single'
export const WALLETLOAD_CARD_NUMBER_LIFETIME = 'WalletLoad_Card_number_lifetime'
export const WALLETLOAD_BANKACCOUNT_AVAILABLE = 'WalletLoad_BankAccount_available'
export const WALLETLOAD_BANKACCOUNT_FEE = 'WalletLoad_BankAccount_fee'
export const WALLETLOAD_BANKACCOUNT_AMOUNT_24H = 'WalletLoad_BankAccount_amount_24h'
export const WALLETLOAD_BANKACCOUNT_AMOUNT_SINGLE = 'WalletLoad_BankAccount_amount_single'
export const WALLETLOAD_BANKACCOUNT_AMOUNT_LIFETIME = 'WalletLoad_BankAccount_amount_lifetime'
export const WALLETLOAD_BANKACCOUNT_NUMBER_24H = 'WalletLoad_BankAccount_number_24h'
export const WALLETLOAD_BANKACCOUNT_NUMBER_SINGLE = 'WalletLoad_BankAccount_number_single'
export const WALLETLOAD_BANKACCOUNT_NUMBER_LIFETIME = 'WalletLoad_BankAccount_number_lifetime'
export const WALLETLOAD_PAYPAL_AVAILABLE = 'WalletLoad_Paypal_available'
export const WALLETLOAD_PAYPAL_FEE = 'WalletLoad_Paypal_fee'
export const WALLETLOAD_PAYPAL_AMOUNT_24H = 'WalletLoad_Paypal_amount_24h'
export const WALLETLOAD_PAYPAL_AMOUNT_SINGLE = 'WalletLoad_Paypal_amount_single'
export const WALLETLOAD_PAYPAL_AMOUNT_LIFETIME = 'WalletLoad_Paypal_amount_lifetime'
export const WALLETLOAD_PAYPAL_NUMBER_24H = 'WalletLoad_Paypal_number_24h'
export const WALLETLOAD_PAYPAL_NUMBER_SINGLE = 'WalletLoad_Paypal_number_single'
export const WALLETLOAD_PAYPAL_NUMBER_LIFETIME = 'WalletLoad_Paypal_number_lifetime'