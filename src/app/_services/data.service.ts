import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DataService {
  onTweakScores: EventEmitter<any> = new EventEmitter();
  onSaveFqscore: EventEmitter<any> = new EventEmitter();
  getFqscore: EventEmitter<any> = new EventEmitter();
  onChangeRequestRoute: EventEmitter<any> = new EventEmitter();
  onInitiateRecollection: EventEmitter<any> = new EventEmitter();
  paymentHasBeenProcessedFinally: EventEmitter<any> = new EventEmitter();
  onRollbackPaymentFromStatement: EventEmitter<any> = new EventEmitter();
  onGetData: EventEmitter<any> = new EventEmitter();
  onGetLoan: EventEmitter<any> = new EventEmitter();
  onGetCustomer: EventEmitter<any> = new EventEmitter();
  onCancelPayment: EventEmitter<any> = new EventEmitter();
  onRequestCreated: EventEmitter<any> = new EventEmitter();
  onViewLoan: EventEmitter<any> = new EventEmitter();
  onpreviewLoan: EventEmitter<any> = new EventEmitter();
  onProfileNav: EventEmitter<any> = new EventEmitter();
  onScheduleNav: EventEmitter<any> = new EventEmitter();
  onBackToLoanSummary: EventEmitter<any> = new EventEmitter();
  onBreakLoan: EventEmitter<any> = new EventEmitter();
  onEditCredit: EventEmitter<any> = new EventEmitter();
  onEditDebit: EventEmitter<any> = new EventEmitter();
  onOpenLedger: EventEmitter<any> = new EventEmitter();
  onOpenLoanChildModal: EventEmitter<any> = new EventEmitter();
  onConfirmaLoanToMarket: EventEmitter<any> = new EventEmitter();
  onConfirmAcceptOffer: EventEmitter<any> = new EventEmitter();
  onConfirmRejectOffer: EventEmitter<any> = new EventEmitter();
  onConfirmMakeOffer: EventEmitter<any> = new EventEmitter();
  onConfirmRemoveLoan: EventEmitter<any> = new EventEmitter();
  onMakePaymentFromStatement: EventEmitter<any> = new EventEmitter();
  onBreakingLoan: EventEmitter<any> = new EventEmitter();
  onTakeOwnership: EventEmitter<any> = new EventEmitter();
  onchangeOwnership: EventEmitter<any> = new EventEmitter();
  onRequestRoute: EventEmitter<any> = new EventEmitter();
  showListView: EventEmitter<any> = new EventEmitter();
  showGridView: EventEmitter<any> = new EventEmitter();
  filterLoans: EventEmitter<any> = new EventEmitter();
  onCheckLoan: EventEmitter<any> = new EventEmitter();
  onSearchForLoans: EventEmitter<any> = new EventEmitter();
  onLoanMore: EventEmitter<any> = new EventEmitter();
  onConfirmCancelContract: EventEmitter<any> = new EventEmitter();
  openSearchView: EventEmitter<any> = new EventEmitter();
  closeSearchView: EventEmitter<any> = new EventEmitter();
  onResetFilters: EventEmitter<any> = new EventEmitter();
  showCalendarDetails: EventEmitter<any> = new EventEmitter();
  onConfirmLenderHasMadeOffer: EventEmitter<any> = new EventEmitter();
  onConfirmLenderHasMadeOffers: EventEmitter<any> = new EventEmitter();
  refreshPage: EventEmitter<any> = new EventEmitter();
  reloadCustomers: EventEmitter<any> = new EventEmitter();
  makeOfferToMarketLoan: EventEmitter<any> = new EventEmitter();
  borrowerChange: EventEmitter<any> = new EventEmitter();
  openContractForEdit: EventEmitter<any> = new EventEmitter();
  onDeleteCustomer: EventEmitter<any> = new EventEmitter();
  resendWelcomeMail: EventEmitter<any> = new EventEmitter();
  reloadCustomer: EventEmitter<any> = new EventEmitter();
  addNewCustomerEmployee: EventEmitter<any> = new EventEmitter();
  enableBulkDisbursements: EventEmitter<any> = new EventEmitter();
  prepareBulkPay: EventEmitter<any> = new EventEmitter()
  updateTotalBulkDisbursements: EventEmitter<any> = new EventEmitter()
  onReverseTransaction: EventEmitter<any> = new EventEmitter()
  doCheckWalletTransactionStatuses: EventEmitter<any> = new EventEmitter();
  onOpenCustomerStatement: EventEmitter<any> = new EventEmitter();
}