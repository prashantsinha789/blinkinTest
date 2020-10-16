const mockData = require("../fixtures/data_blinkin_dataFile");
require('cypress-xpath');
var expect = require('chai').expect
var preCount = 0;

class usersPage {
    addSingleUser(name, email, passw, position) {
        cy
            .get('#nf-name').type(name)
            .get('#nf-email').type(email)
            .get(':nth-child(3) > .form-control').type(passw)
            .get('#nf-position').type(position)
            .get('.css-tlfecz-indicatorContainer').click()
            .get('.css-1hwfws3').type(`india{downarrow}{enter}`)
            .wait(1000)
            .xpath('//button[text()="Submit"]').click()
            .get('form > .mt-3').should('be.visible');
    }

    addSingleUserWithoutPassword(name, email, position) {
        cy
            .get('#nf-name').type(name)
            .get('#nf-email').type(email)
            .get('#inline-radio2').click()
            .get('#nf-position').type(position)
            .get('.css-tlfecz-indicatorContainer').click()
            .get('.css-1hwfws3').type(`india{downarrow}{enter}`)
            .wait(1000)
            .xpath('//button[text()="Submit"]').click()
            .get('form > .mt-3').should('be.visible');
    }

    verifyCreatedUserWithPassword() {
        cy
            .get('tbody > :nth-child(1) > :nth-child(2)').should('be.visible')
    }

    verifyCount() {
        cy
            .get(':nth-child(2) > .card > .card-body > .row > .col > .h5').then(function($elem) {
                preCount = $elem.text();
            })
    }

    verifyPostCount() {
        cy
            .get(':nth-child(2) > .card > .card-body > .row > .col > .h5').then(function($elem) {
                var postCount = $elem.text();
                assert.equal(Number(preCount) + 1, Number(postCount), '******* Count Matched *******')
            })
    }


    verifyPostCountForBulkUser() {
        cy
            .get(':nth-child(2) > .card > .card-body > .row > .col > .h5').then(function($elem) {
                var postCount = $elem.text();
                assert.equal(Number(preCount) + 2, Number(postCount), '******* Count Matched *******')
            })
    }

    deleteUser() {
        cy
            .get('tbody > :nth-child(1) > .col-xs-1 > .pure-material-checkbox > span').click()
            .wait(2000)
            .get('.btn-danger').click()
            .wait(2000)
            .get('.modal-footer > .btn').click();
    }
}

export const users = new usersPage();