var Page = require('./page')
const assert = require("assert");
const access= require('../testdata/testdata.js')

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    email: { get: function () { return browser.$(`*[id="Email"]`); } },
    password: { get: function () { return browser.$(`*[id="Password"]`); } },
    ConfirmPassword: { get: function () { return browser.$(`*[id="ConfirmPassword"]`); } },
    TermsAndCondition: { get: function () { return browser.$(`[id="UserAgreement"]`); } },
    PrivacyPolicy: { get: function () { return browser.$(`[id="Privacyolicy"]`); } },
    registerbtn:     { get: function () { return browser.$(`[class="login login-submit"]`); } },
    registrationSucess: { get: function () { return browser.$(`[class="register-success-header"]`); } },
    AwaitingEmailVerification: { get: function () { return browser.$(`[class="verification-email-account-wating-header"]`); } },
    wholePage: { get: function () { return browser.maximizeWindow(); } },
    successHeader: { get: function () { return browser.$(`//*[@class="register-success-header"]/child::h1`); } },
    successContainer: { get: function () { return browser.$(`//*[@class="login-screen--form-container"]/child::p[1]`); } },
    OKbtn: { get: function () { return browser.$(`[class="btn btn-primary text-capitalize"]`); } },
    emailAccountVerification: { get: function () { return browser.$(`[class="verification-email-account-wating-header"]`); } },
    Username: { get: function () { return browser.$(`*[id="Username"]`); } },
    UserPassword: { get: function () { return browser.$(`*[id="Password"]`); } },
   
    AdminSearchEmail: { get: function () { return browser.$(`*[id="gs_Email"]`); } },
    AdminEdit: { get: function () { return browser.$(`*[class="fa fa-edit"]`); } },
    AdminTab: { get: function () { return browser.$(`*[data-toggle="tab"]`); } },
    AdminSaveBtn: { get: function () { return browser.$(`*[class="btn btn-primary btn-responsive"]`); } },
    AdminStatus: { get: function () { return browser.$(`*[id="Status"]`); } },
    AdminUserStatus: { get: function () { return browser.$(`*[class="label label-success"]`); } },

    OrderNowBtn: { get: function () { return browser.$(`*[class="btn-order bag"]`); } },
    MakeAnOfferBtn: { get: function () { return browser.$(`*[class="offer"]`); } },
    OrderNowModal: { get: function () { return browser.$(`*[id="popup-make-order-now"]`); } },
    acceptCondition: { get: function () { return browser.$(`*[id="AcceptCondition"]`); } },
    orderQuantity: { get: function () { return browser.$(`*[id="tempQuantity"]`); } },
    modalOrderNowBtn: { get: function () { return browser.$(`*[class="ok"]`); } },
    userMobilePhonetxtfld: { get: function () { return browser.$(`*[name="Mobile Phone"]`); } },
    continuebtn: { get: function () { return browser.$(`*[class="btn btn-danger"]`); } },
    orderOKbtn: { get: function () { return browser.$(`*[class="swal2-confirm swal2-styled"]`); } },
    sucessOrderTitle: { get: function () { return browser.$(`*[class="swal2-title"]`); } },
    sucessOrderContent: { get: function () { return browser.$(`*[class="swal2-content"]`); } },
    userDropDown: { get: function () { return browser.$(`*[id="userDropdown"]`); } },
    userDashBoard: { get: function () { return browser.$('.dropdown-item=My Dashboard'); } },
    OrderAppMenu: { get: function () { return browser.$('p=Orders'); } },
    OpenOrder: { get: function () { return browser.$(`*[id="Open"]`); } },
    ViewIcon: { get: function () { return browser.$(`*[class="fa fa-eye icon-action"]`); } },
    shipAnOrder: { get: function () { return browser.$(`*[class="btn btn btn-shipanorder btn-primary"]`); } },
    
    
    
    
    
    
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this,'');
    } },


    BudbiDrRegistration: { value: function(){

        Page.open.call(this, '/Account/Register');
        this.email.waitForDisplayed({ timeout: 270000 });
        this.email.click();
        this.email.setValue(`gabriel.bobilles.`+Page.ramNumber()+`@interactivepartners.com.au`);
        this.password.click();
        this.password.setValue(access.Password.password);
        this.ConfirmPassword.click();
        this.ConfirmPassword.setValue(access.Password.password);
        this.TermsAndCondition.click();
        var userEmail = this.email.getValue()
        
        this.PrivacyPolicy.click();
        this.registerbtn.click();
        this.registrationSucess.waitForDisplayed({ timeout: 270000 });
        expect(this.OKbtn).toBeDisplayed()  
        assert.strictEqual(this.successHeader.getText(), "Congratulations!");
        assert.strictEqual(this.successContainer.getText(), "You have successfully created your account. Please check your email for instructions to activate your account.");
        browser.pause(3000)
        this.OKbtn.click();
        browser.pause(2000)
        expect(this.Username).toBeDisplayed();
        this.Username.click()
        this.Username.setValue(userEmail)
        this.UserPassword.click()
        this.UserPassword.setValue(access.Password.password)
        this.registerbtn.click();
        this.AwaitingEmailVerification.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(this.AwaitingEmailVerification.getText(), "Awaiting Email Verification");
        browser.pause(3000)


        //** Open new window */
        browser.newWindow('https://budbidrtest.interactivepartners.com.au/Admin/Users')
        browser.pause(1000)
        expect(this.Username).toBeDisplayed();
        this.Username.click()
        browser.pause(1000)
        this.Username.setValue(access.AdminCredential.user)
        this.UserPassword.click()
        browser.pause(1000)
        this.UserPassword.setValue(access.AdminCredential.pass)
        this.registerbtn.click();
        browser.pause(1000)
        this.AdminSearchEmail.waitForDisplayed({ timeout: 270000 });
        this.AdminSearchEmail.click()
        browser.pause(1000)
        this.AdminSearchEmail.setValue(userEmail)
        browser.pause(1000)
        browser.keys("Enter")
        browser.pause(1000)
        this.AdminUserStatus.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(this.AdminUserStatus.getText(), "Registration Received");
        // this.AdminEdit.click();
        // this.AdminTab.waitForDisplayed({ timeout: 270000 });
        // browser.pause(1000)
        // this.AdminStatus.selectByAttribute('value', '1')
        browser.pause(5000)
    }},

    BudbiDrOrderNow: { value: function(user , pass ){

        Page.open.call(this, '/Account/Login?returnUrl=%2FProduct%2FIndex');
        this.Username.waitForDisplayed({ timeout: 270000 });
        this.Username.click()
        this.Username.setValue(user)
        this.UserPassword.click()
        this.UserPassword.setValue(pass)
        this.registerbtn.click();
        this.OrderNowBtn.waitForDisplayed({ timeout: 270000 });
        this.OrderNowBtn.click()
        this.OrderNowModal.waitForDisplayed({ timeout: 270000 });
        this.acceptCondition.click()
        this.orderQuantity.click()
        browser.pause(1000)
        this.orderQuantity.clearValue()
        browser.pause(1000)
        this.orderQuantity.click()
        browser.pause(1000)
        this.orderQuantity.clearValue()
        browser.pause(1000)
        this.orderQuantity.setValue()
        this.modalOrderNowBtn.click()
        this.userMobilePhonetxtfld.waitForDisplayed({ timeout: 270000 });
        this.userMobilePhonetxtfld.click()
        this.userMobilePhonetxtfld.setValue(`9934378327`)
        this.continuebtn.click()
        this.orderOKbtn.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(this.sucessOrderTitle.getText(), "successfully");
        assert.strictEqual(this.sucessOrderContent.getText(), "Your order have been updated success");
        browser.pause(5000)

    }},

    BudbiDrShipOrder: { value: function(){

        Page.open.call(this, '/Account/Login?returnUrl=%2FProduct%2FIndex');
        this.Username.waitForDisplayed({ timeout: 270000 });
        this.Username.click()
        this.Username.setValue(access.SellerCredential.user)
        this.UserPassword.click()
        this.UserPassword.setValue(access.SellerCredential.pass)
        this.registerbtn.click();
        this.userDropDown.waitForDisplayed({ timeout: 270000 });
        this.userDropDown.click()
        browser.pause(1000)
        this.userDashBoard.click()
        var allGUID = browser.getWindowHandles();
        browser.switchToWindow(allGUID[1]);
        browser.pause(1000)
        this.OrderAppMenu.click()
        this.OpenOrder.waitForDisplayed({ timeout: 270000 });
        this.OpenOrder.click()
        this.ViewIcon.click();
        this.shipAnOrder.waitForDisplayed({ timeout: 270000 });
        this.shipAnOrder.click()
        browser.pause(500000)

    }},

});

module.exports = LoginPage;