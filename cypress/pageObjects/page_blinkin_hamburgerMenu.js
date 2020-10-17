const mockData = require("../fixtures/data_blinkin_dataFile");

class hamburgerMenuPage {

    expandMenu() {
        cy
            .wait(1000)
            .get('.sidebar-minimizer').click()
            .wait(2000);
    }

    goToAdmin() {
        cy
            .get('.nav-dropdown-toggle').click()
            .wait(3000)
    }

    goToConnectivityTest() {
        cy
            .get('a[href*="#/connectivity"]').click()
            .wait(3000)
    }


    clickSkipBtn() {
        cy
            .wait(5000)
            .get('.btn-link').should('be.visible')
            .get('.btn-link').click();
    }

    goToAddUser() {
        cy
            .get('a[href*="#/admin/add-users"]').click()
            .wait(3000);
    }

    goToBulkAddUser() {
        cy
            .get('a[href*="#/admin/add-users"]').click()
            .wait(3000)
            .xpath('//a[text()="Add Bulk Users"]').click();
    }

    selectWithoutPassword() {
        cy
            .get("#radio1").click();
    }

    goToDashboard() {
        cy
            .get('a[href*="#/admin/dashboard"]').click()
            .wait(2000);
    }

    goToUsers() {
        cy
            .get('a[href*="#/admin/users"]').click()
            .wait(2000);
    }

    goToIssue() {
        cy
            .get('a[href*="#/issue"]').click()
            .wait(2000);
    }

    goToBlinks() {
        cy
            .get('a[href*="#/blinks"]').click()
            .wait(2000);
    }
}
export const hamburgerMenu = new hamburgerMenuPage();