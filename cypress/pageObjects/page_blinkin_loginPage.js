const mockData = require("../fixtures/data_blinkin_dataFile");

class loginPage {

    open() {
        cy
            .visit(mockData.blinkin_url)
            .wait(1000)
            .clearCache;
    }

    openForgetPassPage() {
        cy
            .visit(mockData.forgetPassPage)
            .wait(1000);
    }

    loginAs(userName, password) {
        cy
            .get('.mb-3 > .form-control').type(userName)
            .wait(1000)
            .get('.mb-4 > .form-control').type(password);
    }

    clickOnLoginBtn() {
        cy
            .get('.px-4').click()
            .wait(1000)
            .get('.navbar-brand-minimized').should('be.visible')
            .wait(1000)
            .get('h1').should('be.visible');
    }

    logout() {
        cy
            .get('.dropdown > .nav-link > .fa').click()
            .wait(1000)
            .get('.fa.fa-sign-out').click()
            .wait(1000);
    }
}
export const login = new loginPage();