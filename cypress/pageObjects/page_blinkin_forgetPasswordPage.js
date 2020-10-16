const mockData = require("../fixtures/data_blinkin_dataFile");

class forgetPasswordPage {

    goToForgetPasswordPage() {
        cy.get('.px-0').click();
    }

    resetPass() {
        cy.get('#email').type(mockData.testEmail);
        cy.wait(1000);
        cy.get('.btn').click();
        cy.wait(1000);
        cy.get('.alert').should('be.visible');
    }
}
export const forgetPassPage = new forgetPasswordPage();