/// <reference types="Cypress" />

class BedanktPage {
    visitHomePage() {
        this.waitForPageLoad();
        this.verifyUrlContainsBedankt();
        this.verifyHeaderText('Bedankt');
        this.verifyParagraphText('Bedankt voor het invoeren van het contact- of nieuwsbrief-formulier. We nemen zo spoedig mogelijk contact op.');
    }

    waitForPageLoad() {
        cy.wait(3000);
    }

    verifyUrlContainsBedankt() {
        cy.url().should('contain', '/bedankt');
    }

    verifyHeaderText(expectedText) {
        this.getHeader().invoke('text').should('eq', expectedText);
    }

    verifyParagraphText(expectedText) {
        this.getParagraph().invoke('text').should('eq', expectedText);
    }

    getHeader() {
        return cy.get('.heading-level-1');
    }

    getParagraph() {
        return cy.get('.paragraph');
    }
}

export default new BedanktPage();

/*
/// <reference types="Cypress" />

class BedanktPage {
    visitHomePage() {
        cy.wait(3000);
        cy.url().should("contains", "/bedankt");
        cy.get('.heading-level-1').invoke('text').should('eq', 'Bedankt');
        cy.get('.paragraph').invoke('text').should('eq', 'Bedankt voor het invoeren van het contact- of nieuwsbrief-formulier. We nemen zo spoedig mogelijk contact op.');
    }
}

export default new BedanktPage();
*/