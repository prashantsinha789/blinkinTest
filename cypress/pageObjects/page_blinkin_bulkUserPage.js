const mockData = require("../fixtures/data_blinkin_dataFile");
import 'cypress-file-upload';

class bulkUserPage {
    selectWithoutPassword() {
        cy
            .get(':nth-child(1) > .inputGroup > label').click();
    }

    uploadCSVwithoutPassword() {
        cy
            .get('.dashed-border > input').click()
            .attachFile("/users.csv")
            .xpath("//button[text()='Upload']").click()
            .wait(5000);
    }

    setPasswordForUser() {
        cy
            .get(':nth-child(1) > :nth-child(2) > .title').click()
            .get('form > :nth-child(3) > .form-control').type(mockData.password)
            .get('.modal-footer > .btn-primary').click()
            .wait(2000);
    }
}
export const bulkUser = new bulkUserPage();