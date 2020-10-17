import { login } from "../pageObjects/page_blinkin_loginPage";
const dataFile = require("../fixtures/data_blinkin_dataFile");
import { hamburgerMenu } from "../pageObjects/page_blinkin_hamburgerMenu";
import { blinksPageObj } from "../pageObjects/page_blinkin_blinksPage";


const user = dataFile.username;
const pass = dataFile.password;

//handle uncaught exception
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('Create Blink Request with new number', () => {
    it('User should be able to create a a blink request from new number', () => {
        login.open();
        login.loginAs(user, pass);
        login.clickOnLoginBtn();
        hamburgerMenu.expandMenu();
        hamburgerMenu.goToConnectivityTest();
        hamburgerMenu.clickSkipBtn();
    })
})