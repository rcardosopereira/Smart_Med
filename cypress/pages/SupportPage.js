/// <reference types="Cypress" />

class SupportPage {
    verifySupportMenu() {
        this.getNavList().invoke('text').should('include', 'Support');
    }

    clickSupportLink() {
        this.getSupportLink().click();
    }

    verifySupportPageUrl() {
        cy.url().should('contain', '/support');
    }

    verifySupportPageHeading() {
        this.getSupportHeading().invoke('text').should('eq', 'Support');
    }

    verifySupportPageParagraph() {
        this.getSupportParagraph().invoke('text').then((text) => {
            expect(text.trim()).to.eq('Hulp nodig? Wij zijn er voor je. Kies één van de onderstaande support-kanalen om verder te gaan.');
        });
    }

    getNavList() {
        return cy.get('.nav-list');
    }

    getSupportLink() {
        return cy.get('.nav-list > :nth-child(3) > .absolute-link');
    }

    getSupportHeading() {
        return cy.get(':nth-child(2) > :nth-child(1) > .heading-level-1');
    }

    getSupportParagraph() {
        return cy.get(':nth-child(2) > :nth-child(1) > .paragraph');
    }
}

export default new SupportPage();


/*
/// <reference types="Cypress" />

class SupportPage {
    verifySupportMenu() {
        cy.get('.nav-list').invoke('text').should('include', 'Support');
    }

    clickSupportLink() {
        cy.get('.nav-list > :nth-child(3) > .absolute-link').click();
    }

    verifySupportPageUrl() {
        cy.url().should("contains", "/support");
    }

    verifySupportPageHeading() {
        cy.get(':nth-child(2) > :nth-child(1) > .heading-level-1').invoke('text').should('eq', 'Support');
    }

    verifySupportPageParagraph() {
        cy.get(':nth-child(2) > :nth-child(1) > .paragraph').invoke('text').should('eq', 'Hulp nodig? Wij zijn er voor je. Kies één van de onderstaande support-kanalen om verder te gaan. ');
    }
}

export default new SupportPage();

*/




