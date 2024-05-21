/// <reference types="Cypress" />

class NewsPage {
    verifyNewsMenu() {
        this.getNavList().invoke('text').should('include', 'Nieuws');
    }

    clickNewsLink() {
        this.getNewsLink().click();
    }

    verifyNewsPageUrl() {
        cy.url().should('contain', '/nieuws');
    }

    verifyNewsPageHeading() {
        this.getNewsHeading().invoke('text').should('eq', 'Nieuws');
    }

    getNavList() {
        return cy.get('.nav-list');
    }

    getNewsLink() {
        return cy.get('.nav-list > :nth-child(4) > .absolute-link');
    }

    getNewsHeading() {
        return cy.get('.heading-level-1');
    }
}

export default new NewsPage();



/*
/// <reference types="Cypress" />

class NewsPage {
    verifyNewsMenu() {
        cy.get('.nav-list').invoke('text').should('include', 'Nieuws');
    }

    clickNewsLink() {
        cy.get('.nav-list > :nth-child(4) > .absolute-link').click();
    }

    verifyNewsPageUrl() {
        cy.url().should("contains", "/nieuws");
    }

    verifyNewsPageHeading() {
        cy.get('.heading-level-1').invoke('text').should('eq', 'Nieuws');
    }
}

export default new NewsPage();
*/