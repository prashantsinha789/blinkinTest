import { login } from "../pageObjects/page_blinkin_loginPage";
const dataFile = require("../fixtures/data_blinkin_dataFile");
import { hamburgerMenu } from "../pageObjects/page_blinkin_hamburgerMenu";
import { users } from "../pageObjects/page_blinkin_usersPage";
import { bulkUser } from "../pageObjects/page_blinkin_bulkUserPage";


const user = dataFile.username;
const pass = dataFile.password;
const bUser1 = dataFile.bulkUser1;
const bUser2 = dataFile.bulkUser2;


//handle uncaught exception
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('Create Bulk Users with/without password', () => {
    it('Admin Should be able to import users without password from csv file', () => {
        login.open();
        login.loginAs(user, pass);
        login.clickOnLoginBtn();
        hamburgerMenu.expandMenu();
        hamburgerMenu.goToAdmin();
        // check precount for users
        hamburgerMenu.goToDashboard();
        users.verifyCount();
        // go to add user
        hamburgerMenu.goToBulkAddUser();
        bulkUser.selectWithoutPassword();
        bulkUser.uploadCSVwithoutPassword();
        // check postcount for users
        cy.wait(3000);
        hamburgerMenu.goToDashboard();
        users.verifyPostCountForBulkUser();
        //logout
        login.logout();
    });

    it('Set the password for user 1, login and delete the user', () => {
        login.open();
        login.loginAs(user, pass);
        login.clickOnLoginBtn();
        hamburgerMenu.expandMenu();
        hamburgerMenu.goToAdmin();
        // go to users
        hamburgerMenu.goToUsers();
        //setPassword
        bulkUser.setPasswordForUser();
        login.logout();

        //login as bulk user 1
        login.loginAs(bUser2, pass);
        login.clickOnLoginBtn();
        //logout
        login.logout();

        //login back as an admin and delete the user
        login.loginAs(user, pass);
        login.clickOnLoginBtn();
        hamburgerMenu.expandMenu();
        hamburgerMenu.goToAdmin();
        // go to users
        hamburgerMenu.goToUsers();
        users.deleteUser();
        //logout
        login.logout();
    })


    it('Set the password for user 2, login and delete the user', () => {
        login.open();
        login.loginAs(user, pass);
        login.clickOnLoginBtn();
        hamburgerMenu.expandMenu();
        hamburgerMenu.goToAdmin();
        // go to users
        hamburgerMenu.goToUsers();
        //setPassword
        bulkUser.setPasswordForUser();
        login.logout();

        //login as bulk user 1
        login.loginAs(bUser1, pass);
        login.clickOnLoginBtn();
        //logout
        login.logout();

        //login back as an admin and delete the user
        login.loginAs(user, pass);
        login.clickOnLoginBtn();
        hamburgerMenu.expandMenu();
        hamburgerMenu.goToAdmin();
        // go to users
        hamburgerMenu.goToUsers();
        users.deleteUser();
        //logout
        login.logout();
    })
})