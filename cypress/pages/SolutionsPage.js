

/// <reference types="Cypress" />

class SolutionsPage {

    openSolutionsMenu() {
        cy.get('.dropdown-menu').should('exist');
        cy.get('.tap > .arrow').first().click();
        cy.get('.tap > .navigation-text').invoke('text').should('eq', 'solutions');
    }

    verifySolutionOptions(options) {
        options.forEach(option => {
            cy.get('.navigation-text').should('be.visible').invoke('text').should('include', option);
        });
    }

    selectSolutionOption(index) {
        cy.get(`.dropdown-menu > :nth-child(${index}) > .absolute-link`).click();
    }

    verifySolutionDetails(urlPart, heading, subheading) {
        cy.url().should('contain', urlPart);
        cy.get('.solution-column > .w-layout-vflex > .heading-level-1').invoke('text').should('eq', heading);
        cy.get('.subheading').invoke('text').should('eq', subheading);
    }
}

export default new SolutionsPage();

