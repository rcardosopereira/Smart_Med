/// <reference types="Cypress" />

class SearchPage {
    verifySearchMenu() {
        this.getNavList().invoke('text').should('include', 'Zoeken');
    }

    clickSearchLink() {
        this.getSearchLink().click();
    }

    verifySearchResultPageHeading() {
        this.getSearchResultHeading().invoke('text').should('eq', 'Zoekresultaten');
    }

    searchFor(query) {
        this.getSearchInput().type(query);
        this.getSearchButton().click();
    }

    verifySearchResults(firstResult, secondResult) {
        this.getFirstSearchResult().invoke('text').should('eq', firstResult);
        this.getSecondSearchResult().invoke('text').should('eq', secondResult);
    }

    verifySearchResultsDescription(description) {
        this.getSearchResultDescription().invoke('text').should('include', description);
    }

    getNavList() {
        return cy.get('.nav-list');
    }

    getSearchLink() {
        return cy.get('.nav-list > :nth-child(5) > .absolute-link');
    }

    getSearchResultHeading() {
        return cy.get('.heading-level-1');
    }

    getSearchInput() {
        return cy.get('#search');
    }

    getSearchButton() {
        return cy.get('.search > .button-new');
    }

    getFirstSearchResult() {
        return cy.get('.search-result-list > :nth-child(1) > a');
    }

    getSecondSearchResult() {
        return cy.get('.search-result-list > :nth-child(2) > a');
    }

    getSearchResultDescription() {
        return cy.get(':nth-child(3) > p > :nth-child(5)');
    }
}

export default new SearchPage();



/*
/// <reference types="Cypress" />

class SearchPage {
    verifySearchMenu() {
        cy.get('.nav-list').invoke('text').should('include', 'Zoeken');
    }

    clickSearchLink() {
        cy.get('.nav-list > :nth-child(5) > .absolute-link').click();
    }

    verifySearchResultPageHeading() {
        cy.get('.heading-level-1').invoke('text').should('eq', 'Zoekresultaten');
    }

    searchFor(query) {
        cy.get('#search').type(query);
        cy.get('.search > .button-new').click();
    }

    verifySearchResults(firstResult, secondResult) {
        cy.get('.search-result-list > :nth-child(1) > a').invoke('text').should('eq', firstResult);
        cy.get('.search-result-list > :nth-child(2) > a').invoke('text').should('eq', secondResult);
    }

    verifySearchResultsDescription(description) {
        cy.get(':nth-child(3) > p > :nth-child(5)').invoke('text').should('include', description);
    }
}

export default new SearchPage();
*/