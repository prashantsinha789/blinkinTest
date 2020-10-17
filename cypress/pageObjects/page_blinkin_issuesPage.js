const mockData = require("../fixtures/data_blinkin_dataFile");
import 'cypress-file-upload';
require('cypress-xpath');


class issuePage {

    createIssue() {
        cy
            .get('.justify-content-end > .btn-sm').click()
            .get('#title').type("Test Issue")
            .get('.ql-editor').type("This is a test issue for automation")
            .get(':nth-child(1) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click()
            .get('.css-1hwfws3').eq(1).type(`pavan{downarrow}{enter}`)
            .get('.col-4 > :nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click()
            .get('.css-1hwfws3').eq(2).type(`pavan{downarrow}{enter}`)
            .get('#exampleSelect').eq(0).type("Test")
            .get(':nth-child(4) > #exampleSelect').select('Critical')
            .get(':nth-child(5) > .form-control-sm').type("0001")
            .get('#inputEmail4').type("test@blinkin.io")
            .get('#inputPassword4').type("9354287159")
            .get('.modal-footer > .btn-primary').click()
            .xpath("//p[text()='Test Issue']").should('be.visible')
            .xpath("//p[text()='Test Issue']").click();
    }

    deleteIssue() {
        cy
            .xpath("//p[text()='Test Issue']").click()
            .wait(2000)
            .get('.btn-danger').click()
            .wait(1000)
            .get('.modal-footer > .btn-danger').click()
            .wait(1500);
    }
}
export const issuePageObj = new issuePage();