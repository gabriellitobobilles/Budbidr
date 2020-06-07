var RocksPage = require('../../PageObjects/rocks.page');
const access= require('../../testdata/testdata.js')


describe('Weekly Report', function () {

    before(function() {
        // runs before all tests in this file regardless where this line is defined.
        RocksPage.open();
        RocksPage.wholePage

    });

    xit('BudbiDr Registration', function (done) {
        this.timeout(300000); // 5 minutes

        RocksPage.BudbiDrRegistration()


    });

    it('BudbiDr OrderNow', function (done) {
        this.timeout(300000); // 5 minutes

        RocksPage.BudbiDrOrderNow(access.StagingUserCredential.user, access.StagingUserCredential.pass)

    });

    it('BudbiDr Ship Order', function (done) {
        this.timeout(300000); // 5 minutes

        RocksPage.BudbiDrShipOrder()

    });

    it('BudbiDr Received and Pay', function (done) {
        this.timeout(300000); // 5 minutes

        RocksPage.BudbiDrReceivedOrder(access.StagingUserCredential.user, access.StagingUserCredential.pass)

    });

    it('BudbiDr Confirmed Payment(Seller)', function (done) {
        this.timeout(300000); // 5 minutes

        RocksPage.BudbiDrConfirmedPayment()

    });

    after(function() {
        // runs after all tests in this file
        browser.closeWindow()
        // browser.deleteSession()
    });


});