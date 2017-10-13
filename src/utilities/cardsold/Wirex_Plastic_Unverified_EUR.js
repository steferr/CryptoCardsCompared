import * as o from '../constants'

const Wirex_Plastic_Unverified_EUR = {

  cardID: 'Wirex_Plastic_Unverified_EUR',
  company: o.WIREX,
  cardName: '',
  cardIssuer: o.MASTERCARD,
  spendingCurrency: o.EUR,
  cardType: o.PLASTIC,
  instantCryptoPayment: false,

  idRequired: false,
  addressRequired: false,

  monthlyFee: `${o.EUR}1`,
  annualFee: `${o.EUR}12*`,

  cardIssuancePrice: `${o.USD}17`,
  cardIssuanceTime: 3,
  cardDeliveryStdPrice: `${o.USD}1`,
  cardDeliveryStdTimeMin: 7,
  cardDeliveryStdTimeMax: 40,
  cardDeliveryExpPrice: `${o.USD}50`,
  cardDeliveryExpTimeMin: 2,
  cardDeliveryExpTimeMax: 10,
  cardReplacementExpPrice: '',
  cardReplacementExpTime: '',
  cardReplacementStdPrice: '',
  cardReplacementStdTime: '',
  pinChange: `${o.EUR}0.6`,

  currencyConversion: 0,

  connectedWallets: [o.EUR, o.USD, o.GBP, o.BTC],
  twoFactorsAuth: true,
  cashBack: 0,

  app_IOS: true,
  app_Android: true,
  app_Web: true,

  ATM_Domestic_Widthrawal_Fee: `${o.EUR}1.75`,
  ATM_International_Withdrawal_Fee: `${o.EUR}2.75`,
  ATM_BalanceInquiry_Fee: 0,
  ATM_TransactionNumber_24h: 2,
  ATM_TransactionNumber_Month: '60*',
  ATM_TransactionNumber_Year: '730*',
  ATM_TransactionNumber_Lifetime: '∞',
  ATM_WithdrawalAmount_Single: `${o.EUR}200`,
  ATM_WithdrawalAmount_24h: `${o.EUR}400*`,
  ATM_WithdrawalAmount_Month: `${o.EUR}800*`,
  ATM_WithdrawalAmount_Year: `${o.EUR}800*`,
  ATM_WithdrawalAmount_Lifetime: `${o.EUR}800`,

  Purchases_Total_number_24h: '∞',
  Purchases_Total_number_month: '∞',
  Purchases_Total_number_year: '∞',
  Purchases_Total_number_lifetime: '∞',
  Purchases_Total_spending_single: `${o.EUR}800`,
  Purchases_Total_spending_24h: `${o.EUR}800`,
  Purchases_Total_spending_month: `${o.EUR}800*`,
  Purchases_Total_spending_year: `${o.EUR}800*`,
  Purchases_Total_spending_lifetime: `${o.EUR}800`,
  Purchases_Offline_number_24h: '∞',
  Purchases_Offline_number_year: '∞',
  Purchases_Offline_number_lifetime: '∞',
  Purchases_Offline_spending_single: `${o.EUR}800`,
  Purchases_Offline_spending_24h: `${o.EUR}800`,
  Purchases_Offline_spending_year: `${o.EUR}800*`,
  Purchases_Offline_spending_lifetime: `${o.EUR}800`,
  Purchases_Online_number_24h: '∞',
  Purchases_Online_number_year: '∞',
  Purchases_Online_number_lifetime: '∞',
  Purchases_Online_spending_single: `${o.EUR}800`,
  Purchases_Online_spending_24h: `${o.EUR}800`,
  Purchases_Online_spending_year: `${o.EUR}800*`,
  Purchases_Online_spending_lifetime: `${o.EUR}800`,


  WalletLoad_Total_amount: '',
  WalletUnload_Total_amount: '',
  CardLoad_Total_amount: '',
  CarrdUnload_Total_amount: '',


  WalletLoad_Card_available: false,
  WalletLoad_Card_fee: '-',
    WalletLoad_Card_amount_single: '-',
    WalletLoad_Card_amount_24h: '-',
    WalletLoad_Card_amount_lifetime: '-',
    WalletLoad_Card_number_24h: '-',
    WalletLoad_Card_number_month: '-',
    WalletLoad_Card_number_lifetime: '-',

  WalletLoad_BankAccount_available: false,
  WalletLoad_BankAccount_fee: '-',
    WalletLoad_BankAccount_amount_single: '-',
    WalletLoad_BankAccount_amount_24h: '-',
    WalletLoad_BankAccount_amount_lifetime: '-',
    WalletLoad_BankAccount_number_24h: '-',
    WalletLoad_BankAccount_number_month: '-',
    WalletLoad_BankAccount_number_lifetime: '-',

  WalletLoad_Paypal_available: false,
  WalletLoad_Paypal_fee: '-',
    WalletLoad_Paypal_amount_single: '-',
    WalletLoad_Paypal_amount_24h: '-',
    WalletLoad_Paypal_amount_lifetime: '-',
    WalletLoad_Paypal_number_24h: '-',
    WalletLoad_Paypal_number_month: '-',
    WalletLoad_Paypal_number_lifetime: '-',

  WalletLoad_Skrill_available: false,
  WalletLoad_Skrill_fee: '-',
    WalletLoad_Skrill_amount_single: '-',
    WalletLoad_Skrill_amount_24h: '-',
    WalletLoad_Skrill_amount_lifetime: '-',
    WalletLoad_Skrill_number_24h: '-',
    WalletLoad_Skrill_number_month: '-',
    WalletLoad_Skrill_number_lifetime: '-',

  WalletLoad_Payeer_available: false,
  WalletLoad_Payeer_fee: '-',
    WalletLoad_Payeer_amount_single: '-',
    WalletLoad_Payeer_amount_24h: '-',
    WalletLoad_Payeer_amount_lifetime: '-',
    WalletLoad_Payeer_number_24h: '-',
    WalletLoad_Payeer_number_month: '-',
    WalletLoad_Payeer_number_lifetime: '-',

}

export default Wirex_Plastic_Unverified_EUR
