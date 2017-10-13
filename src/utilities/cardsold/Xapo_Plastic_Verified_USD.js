import * as o from '../constants'

const Xapo_Plastic_Verified_USD = {

  cardID: 'Xapo_Plastic_Verified_USD',
  company: o.XAPO,
  cardName: '',
  cardIssuer: o.VISA,
  spendingCurrency: o.USD,
  cardType: o.PLASTIC,
  instantCryptoPayment: true,

  idRequired: true,
  addressRequired: true,

  monthlyFee: `${o.USD}1*`,
  annualFee: `${o.USD}12`,

  cardIssuancePrice: `${o.USD}20`,
  cardIssuanceTime: 3,
  cardDeliveryStdPrice: `${o.USD}0`,
  cardDeliveryStdTimeMin: 10,
  cardDeliveryStdTimeMax: 25,
  cardDeliveryExpPrice: `${o.USD}55`,
  cardDeliveryExpTimeMin: 2,
  cardDeliveryExpTimeMax: 7,
  cardReplacementExpPrice: `${o.USD}55`,
  cardReplacementExpTime: '',
  cardReplacementStdPrice: `${o.USD}12`,
  cardReplacementStdTime: '',
  pinChange: `${o.USD}1`,

  currencyConversion: '3%',

  connectedWallets: [o.EUR, o.USD, o.GBP, o.BTC, '...150 more'],
  twoFactorsAuth: true,
  cashBack: 0,

  app_IOS: true,
  app_Android: true,
  app_Web: true,

  ATM_Domestic_Widthrawal_Fee: `${o.USD}2.5`,
  ATM_International_Withdrawal_Fee: `${o.USD}3.5`,
  ATM_BalanceInquiry_Fee: '',
  ATM_TransactionNumber_24h: 2,
  ATM_TransactionNumber_Month: '56',
  ATM_TransactionNumber_Year: '672*',
  ATM_TransactionNumber_Lifetime: '∞',
  ATM_WithdrawalAmount_Single: `${o.USD}1000`,
  ATM_WithdrawalAmount_24h: `${o.USD}2000`,
  ATM_WithdrawalAmount_Month: `${o.USD}60000*`,
  ATM_WithdrawalAmount_Year: `${o.USD}730000*`,
  ATM_WithdrawalAmount_Lifetime: '∞',

  Purchases_Total_number_24h: '',
  Purchases_Total_number_month: '',
  Purchases_Total_number_year: '',
  Purchases_Total_number_lifetime: '',
  Purchases_Total_spending_single: `${o.USD}10000`,
  Purchases_Total_spending_24h: `${o.USD}20000`,
  Purchases_Total_spending_month: `${o.USD}600000*`,
  Purchases_Total_spending_year: `${o.USD}7300000*`,
  Purchases_Total_spending_lifetime: '∞',
  Purchases_Offline_number_24h: '∞',
  Purchases_Offline_number_year: '∞',
  Purchases_Offline_number_lifetime: '∞',
  Purchases_Offline_spending_single: '∞',
  Purchases_Offline_spending_24h: '∞',
  Purchases_Offline_spending_year: '∞',
  Purchases_Offline_spending_lifetime: '∞',
  Purchases_Online_number_24h: '∞',
  Purchases_Online_number_year: '∞',
  Purchases_Online_number_lifetime: '∞',
  Purchases_Online_spending_single: '∞',
  Purchases_Online_spending_24h: '∞',
  Purchases_Online_spending_year: '∞',
  Purchases_Online_spending_lifetime: '∞',


  WalletLoad_Total_amount: '',
  WalletUnload_Total_amount: '',
  CardLoad_Total_amount: '',
  CarrdUnload_Total_amount: '',


  WalletLoad_Card_available: true,
  WalletLoad_Card_fee: '5.3%',
    WalletLoad_Card_amount_single: '',
    WalletLoad_Card_amount_24h: '',
    WalletLoad_Card_amount_lifetime: '',
    WalletLoad_Card_number_24h: '',
    WalletLoad_Card_number_month: '',
    WalletLoad_Card_number_lifetime: '',

  WalletLoad_BankAccount_available: true,
  WalletLoad_BankAccount_fee: `${o.EUR}0.5`,
    WalletLoad_BankAccount_amount_single: '',
    WalletLoad_BankAccount_amount_24h: '',
    WalletLoad_BankAccount_amount_lifetime: '',
    WalletLoad_BankAccount_number_24h: '',
    WalletLoad_BankAccount_number_month: '',
    WalletLoad_BankAccount_number_lifetime: '',

  WalletLoad_Paypal_available: false,
  WalletLoad_Paypal_fee: '-',
    WalletLoad_Paypal_amount_single: `-`,
    WalletLoad_Paypal_amount_24h: `-`,
    WalletLoad_Paypal_amount_lifetime: '-',
    WalletLoad_Paypal_number_24h: '-',
    WalletLoad_Paypal_number_month: '-',
    WalletLoad_Paypal_number_lifetime: '-',

  WalletLoad_Skrill_available: false,
  WalletLoad_Skrill_fee: '-',
    WalletLoad_Skrill_amount_single: `-`,
    WalletLoad_Skrill_amount_24h: `-`,
    WalletLoad_Skrill_amount_lifetime: '-',
    WalletLoad_Skrill_number_24h: '-',
    WalletLoad_Skrill_number_month: '-',
    WalletLoad_Skrill_number_lifetime: '-',

  WalletLoad_Payeer_available: false,
  WalletLoad_Payeer_fee: '-',
    WalletLoad_Payeer_amount_single: `-`,
    WalletLoad_Payeer_amount_24h: `-`,
    WalletLoad_Payeer_amount_lifetime: '-',
    WalletLoad_Payeer_number_24h: '-',
    WalletLoad_Payeer_number_month: '-',
    WalletLoad_Payeer_number_lifetime: '-',

}

export default Xapo_Plastic_Verified_USD
