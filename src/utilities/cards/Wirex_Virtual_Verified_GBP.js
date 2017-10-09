import * as o from '../constants'

const Wirex_Virtual_Verified_GBP = {

  cardID: 'Wirex_Virtual_Verified_GBP',
  company: o.WIREX,
  cardName: '',
  cardIssuer: o.MASTERCARD,
  spendingCurrency: o.GBP,
  cardType: o.VIRTUAL,
  instantCryptoPayment: false,

  idRequired: true,
  addressRequired: true,

  monthlyFee: `${o.GBP}1`,
  annualFee: `${o.GBP}12*`,

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
  pinChange: `${o.GBP}0.6`,

  currencyConversion: 0,

  connectedWallets: [o.EUR, o.USD, o.GBP, o.BTC],
  twoFactorsAuth: true,
  cashBack: 0,

  app_IOS: true,
  app_Android: true,
  app_Web: true,

  ATM_Domestic_Widthrawal_Fee:'-',
  ATM_International_Withdrawal_Fee: '-',
  ATM_BalanceInquiry_Fee: '-',
  ATM_TransactionNumber_24h: '-',
  ATM_TransactionNumber_Month: '-',
  ATM_TransactionNumber_Year: '-',
  ATM_TransactionNumber_Lifetime: '-',
  ATM_WithdrawalAmount_Single: '-',
  ATM_WithdrawalAmount_24h: '-',
  ATM_WithdrawalAmount_Month: '-',
  ATM_WithdrawalAmount_Year: '-',
  ATM_WithdrawalAmount_Lifetime: '-',

  Purchases_Total_number_24h: '∞',
  Purchases_Total_number_month: '∞',
  Purchases_Total_number_year: '∞',
  Purchases_Total_number_lifetime: '∞',
  Purchases_Total_spending_single: '∞',
  Purchases_Total_spending_24h: '∞',
  Purchases_Total_spending_month: '∞',
  Purchases_Total_spending_year: '∞',
  Purchases_Total_spending_lifetime: '∞',
  Purchases_Offline_number_24h: '-',
  Purchases_Offline_number_year: '-',
  Purchases_Offline_number_lifetime: '-',
  Purchases_Offline_spending_single: '-',
  Purchases_Offline_spending_24h: '-',
  Purchases_Offline_spending_year: '-',
  Purchases_Offline_spending_lifetime: '-',
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
    WalletLoad_Paypal_amount_single: `${o.GBP}400`,
    WalletLoad_Paypal_amount_24h: `${o.GBP}400`,
    WalletLoad_Paypal_amount_lifetime: '∞',
    WalletLoad_Paypal_number_24h: 2,
    WalletLoad_Paypal_number_month: '60*',
    WalletLoad_Paypal_number_lifetime: '∞',

  WalletLoad_Skrill_available: true,
  WalletLoad_Skrill_fee: '1.99%',
    WalletLoad_Skrill_amount_single: `${o.GBP}400`,
    WalletLoad_Skrill_amount_24h: `${o.GBP}400`,
    WalletLoad_Skrill_amount_lifetime: '∞',
    WalletLoad_Skrill_number_24h: 2,
    WalletLoad_Skrill_number_month: '60*',
    WalletLoad_Skrill_number_lifetime: '∞',

  WalletLoad_Payeer_available: true,
  WalletLoad_Payeer_fee: '1.99%',
    WalletLoad_Payeer_amount_single: `${o.GBP}400`,
    WalletLoad_Payeer_amount_24h: `${o.GBP}400`,
    WalletLoad_Payeer_amount_lifetime: '∞',
    WalletLoad_Payeer_number_24h: 2,
    WalletLoad_Payeer_number_month: '60*',
    WalletLoad_Payeer_number_lifetime: '∞',

}

export default Wirex_Virtual_Verified_GBP
