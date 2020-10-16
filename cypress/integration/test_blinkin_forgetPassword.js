import { login } from "../pageObjects/page_blinkin_loginPage";
const dataFile = require("../fixtures/data_blinkin_dataFile");
import { forgetPassPage } from "../pageObjects/page_blinkin_forgetPasswordPage"


const user = dataFile.username;
const pass = dataFile.password;

//handle uncaught exception
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('Verify Forget Password Feature', () => {
    it('User should be able to verify the forget password page', () => {
        login.openForgetPassPage();
        forgetPassPage.resetPass();
    })

    it('User should be able to Login into the application', () => {
        login.open();
        login.loginAs(user, pass);
        login.clickOnLoginBtn();
        login.logout();
    })

})