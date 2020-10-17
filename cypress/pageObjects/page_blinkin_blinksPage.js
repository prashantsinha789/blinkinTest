const mockData = require("../fixtures/data_blinkin_dataFile");
import 'cypress-file-upload';
require('cypress-xpath');
var preCount;


class blinksPage {

    createBlinks(mobileNum) {
        cy
            .get("#requestBlink").click()
            .get('.intl-tel-input > .form-control').type(mobileNum)
            .get('#blinkInstructions').type("Test Blink")
            .get('#blinkNotesToSelf').type("Test Blink Automation")
            .get('#checkbox2').click()
            .get('.form-group > .btn').click()
            .wait(3000)
            .get(':nth-child(1) > :nth-child(2) > .btn').should('be.visible')
            .reload()
    }

    deleteBlinks() {
        cy
            .get(':nth-child(1) > :nth-child(2) > .btn').click()
            .wait(1000)
            .get('.btn-danger').click()
            .wait(1000)
            .get('.swal2-confirm').click()
            .wait(1000)
            .get('.close > span').click()
            .reload();
    }

    verifyPreCount() {
        cy
            .get(':nth-child(1) > :nth-child(5) > #blinkCount').then(function($elem) {
                preCount = $elem.text();
                cy.log(preCount)
            })
    }

    verifyPostCount() {
        cy
            .get(':nth-child(1) > :nth-child(5) > #blinkCount').then(function($elem) {
                var postCount = $elem.text();
                cy.log(postCount, preCount)
                assert.equal(Number(preCount) + 1, Number(postCount), '******* Count Matched *******')
            })
    }
}
export const blinksPageObj = new blinksPage();