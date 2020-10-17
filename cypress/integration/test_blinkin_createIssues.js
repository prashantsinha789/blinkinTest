import { login } from "../pageObjects/page_blinkin_loginPage";
const dataFile = require("../fixtures/data_blinkin_dataFile");
import { hamburgerMenu } from "../pageObjects/page_blinkin_hamburgerMenu";
import { issuePageObj } from "../pageObjects/page_blinkin_issuesPage";


const user = dataFile.username;
const pass = dataFile.password;

//handle uncaught exception
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('Create Issue', () => {
    it('User should be able to create a issue', () => {
        login.open();
        login.loginAs(user, pass);
        login.clickOnLoginBtn();
        hamburgerMenu.expandMenu();
        hamburgerMenu.goToIssue();
        issuePageObj.createIssue();

    })

    it('User should be able to delete a issue', () => {
        issuePageObj.deleteIssue();
        login.logout()
    })

})