import { login } from "../pageObjects/page_blinkin_loginPage";
const dataFile = require("../fixtures/data_blinkin_dataFile");
import { hamburgerMenu } from "../pageObjects/page_blinkin_hamburgerMenu";
import { users } from "../pageObjects/page_blinkin_usersPage";


const user = dataFile.username;
const pass = dataFile.password;
const uName = dataFile.name;
const emailID = dataFile.email;
const password = dataFile.passwd;
const position = dataFile.position;

//handle uncaught exception
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('Create Users with/without password', () => {
    it('User should be created with the password', () => {
        login.open();
        login.loginAs(user, pass);
        login.clickOnLoginBtn();
        hamburgerMenu.expandMenu();
        hamburgerMenu.goToAdmin();
        // check precount for users
        hamburgerMenu.goToDashboard();
        users.verifyCount();
        // go to add user
        hamburgerMenu.goToAddUser();
        users.addSingleUser(uName, emailID, password, position);
        hamburgerMenu.goToUsers();
        users.verifyCreatedUserWithPassword();
        hamburgerMenu.goToDashboard();
        //check postcount for users
        users.verifyPostCount();
        login.logout();
    })

    it('Created User should be able to login', () => {
        login.open();
        login.loginAs(emailID, password);
        login.clickOnLoginBtn();
        login.logout();
    })

    it('Delete Created User', () => {
        login.open();
        login.loginAs(user, pass);
        login.clickOnLoginBtn();
        hamburgerMenu.expandMenu();
        hamburgerMenu.goToAdmin();
        hamburgerMenu.goToAddUser();
        hamburgerMenu.goToUsers();
        users.deleteUser();
        hamburgerMenu.goToDashboard();
        login.logout();
    })

    it('User should be created without the password', () => {
        login.open();
        login.loginAs(user, pass);
        login.clickOnLoginBtn();
        hamburgerMenu.expandMenu();
        hamburgerMenu.goToAdmin();
        // check precount for users
        hamburgerMenu.goToDashboard();
        users.verifyCount();
        // goto add user
        hamburgerMenu.goToAddUser();
        users.addSingleUserWithoutPassword(uName, emailID, position);
        hamburgerMenu.goToUsers();
        users.verifyCreatedUserWithPassword();
        hamburgerMenu.goToDashboard();
        //check postcount for users
        users.verifyPostCount();
        login.logout();
    })

    it('Delete Created User', () => {
        login.open();
        login.loginAs(user, pass);
        login.clickOnLoginBtn();
        hamburgerMenu.expandMenu();
        hamburgerMenu.goToAdmin();
        hamburgerMenu.goToAddUser();
        hamburgerMenu.goToUsers();
        users.deleteUser();
        hamburgerMenu.goToDashboard();
        login.logout();
    })
})