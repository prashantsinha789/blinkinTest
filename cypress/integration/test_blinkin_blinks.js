import { login } from "../pageObjects/page_blinkin_loginPage";
const dataFile = require("../fixtures/data_blinkin_dataFile");
import { hamburgerMenu } from "../pageObjects/page_blinkin_hamburgerMenu";
import { blinksPageObj } from "../pageObjects/page_blinkin_blinksPage";


const user = dataFile.username;
const pass = dataFile.password;
const mobileNum1 = "8880328818"
const mobileNum2 = "9354287159"

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
        hamburgerMenu.goToBlinks();
        //create blink
        blinksPageObj.createBlinks(mobileNum1);
        //delete blink
        blinksPageObj.deleteBlinks();
        login.logout();
    })
})

describe('Create Blink Request with existing number', () => {
    it('User should be able to create a a blink request from existing number', () => {
        login.open();
        login.loginAs(user, pass);
        login.clickOnLoginBtn();
        hamburgerMenu.expandMenu();
        hamburgerMenu.goToBlinks();
        //create blink
        blinksPageObj.createBlinks(mobileNum2);
        //check the count
        blinksPageObj.verifyPreCount();
        //create 2nd blink
        blinksPageObj.createBlinks(mobileNum2);
        //check postcount
        blinksPageObj.verifyPostCount();
        login.logout();
    })
})