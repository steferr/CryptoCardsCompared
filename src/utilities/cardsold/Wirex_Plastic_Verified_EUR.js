import * as o from '../constants'

const Wirex_Plastic_Verified_EUR = {

  cardID: 'Wirex_Plastic_Verified_EUR',
  company: o.WIREX,
  cardName: '',
  cardIssuer: o.MASTERCARD,
  spendingCurrency: o.EUR,
  cardType: o.PLASTIC,
  instantCryptoPayment: false,

  idRequired: true,
  addressRequired: true,

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
  pinChange: `${o.EUR}0.8`,

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
  ATM_TransactionNumber_24h: 5,
  ATM_TransactionNumber_Month: '150*',
  ATM_TransactionNumber_Year: '1825*',
  ATM_TransactionNumber_Lifetime: '∞',
  ATM_WithdrawalAmount_Single: `${o.EUR}1000`,
  ATM_WithdrawalAmount_24h: `${o.EUR}2000`,
  ATM_WithdrawalAmount_Month: `${o.EUR}60000*`,
  ATM_WithdrawalAmount_Year: `${o.EUR}730000*`,
  ATM_WithdrawalAmount_Lifetime: '∞',

  Purchases_Total_number_24h: '∞',
  Purchases_Total_number_month: '∞',
  Purchases_Total_number_year: '∞',
  Purchases_Total_number_lifetime: '∞',
  Purchases_Total_spending_single: '∞',
  Purchases_Total_spending_month: '∞',
  Purchases_Total_spending_24h: '∞',
  Purchases_Total_spending_year: '∞',
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

  WalletLoad_Paypal_available: true,
  WalletLoad_Paypal_fee: '1.99%',
    WalletLoad_Paypal_amount_single: `${o.EUR}500`,
    WalletLoad_Paypal_amount_24h: `${o.EUR}500`,
    WalletLoad_Paypal_amount_lifetime: '∞',
    WalletLoad_Paypal_number_24h: 2,
    WalletLoad_Paypal_number_month: '60*',
    WalletLoad_Paypal_number_lifetime: '∞',

  WalletLoad_Skrill_available: true,
  WalletLoad_Skrill_fee: '1.99%',
    WalletLoad_Skrill_amount_single: `${o.EUR}500`,
    WalletLoad_Skrill_amount_24h: `${o.EUR}500`,
    WalletLoad_Skrill_amount_lifetime: '∞',
    WalletLoad_Skrill_number_24h: 2,
    WalletLoad_Skrill_number_month: '60*',
    WalletLoad_Skrill_number_lifetime: '∞',

  WalletLoad_Payeer_available: true,
  WalletLoad_Payeer_fee: '1.99%',
    WalletLoad_Payeer_amount_single: `${o.EUR}500`,
    WalletLoad_Payeer_amount_24h: `${o.EUR}500`,
    WalletLoad_Payeer_amount_lifetime: '∞',
    WalletLoad_Payeer_number_24h: 2,
    WalletLoad_Payeer_number_month: '60*',
    WalletLoad_Payeer_number_lifetime: '∞',

}

export default Wirex_Plastic_Verified_EUR
