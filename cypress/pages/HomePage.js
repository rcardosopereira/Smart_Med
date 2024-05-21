/// <reference types="Cypress" />

class HomePage {
  visitHomePage() {
      cy.visit("/");
      this.acceptCookies();
      this.verifyPageHeaders('Innovating Medication Management', 'Now, and in the future.');
  }

  acceptCookies() {
      cy.get('.fs-cc-banner_buttons-wrapper > [fs-cc="allow"]').click();
  }

  verifyPageHeaders(headerText, subheaderText) {
      this.getMainHeader().invoke('text').should('eq', headerText);
      this.getSubHeader().invoke('text').should('eq', subheaderText);
  }

  getMainHeader() {
      return cy.get('.columns > :nth-child(1) > .heading-level-1');
  }

  getSubHeader() {
      return cy.get('.subheading');
  }
}

export default new HomePage();


/*
/// <reference types="Cypress" />

class HomePage {
  visitHomePage() {
    cy.visit("/");
    cy.get('.fs-cc-banner_buttons-wrapper > [fs-cc="allow"]').click();
    cy.get('.columns > :nth-child(1) > .heading-level-1').invoke('text').should('eq', 'Innovating Medication Management');
    cy.get('.subheading').invoke('text').should('eq', 'Now, and in the future.');
  }
}

export default new HomePage();
*/