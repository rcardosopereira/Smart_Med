/// <reference types="Cypress" />

class AboutPage {
  verifyPageElements() {
    this.getNavList().should('exist');
    this.getNavList().invoke('text').should('include', 'Over ons');
  }

  clickAbsoluteLink() {
    this.getAbsoluteLink().click();
  }

  verifyUrlContains(path) {
    cy.url().should('contain', path);
  }

  verifyHeaderText(expectedText) {
    this.getHeaderText().invoke('text').should('eq', expectedText);
  }

  verifySubheaderText(expectedText) {
    this.getSubheaderText().invoke('text').should('eq', expectedText);
  }

  getNavList() {
    return cy.get('.nav-list');
  }

  getAbsoluteLink() {
    return cy.get('.nav-list > :nth-child(2) > .absolute-link');
  }

  getHeaderText() {
    return cy.get('.header-green > .container > .columns > :nth-child(1) > .heading-level-1');
  }

  getSubheaderText() {
    return cy.get('.subheading');
  }
}

export default new AboutPage();



/*
/// <reference types="Cypress" />

class AboutPage {
  verifyPageElements() {
    cy.get('.nav-list').should('exist');
    cy.get('.nav-list').invoke('text').should('include', 'Over ons');
  }

  clickAbsoluteLink() {
    cy.get('.nav-list > :nth-child(2) > .absolute-link').click();
  }

  verifyUrlContains(path) {
    cy.url().should('contain', path);
  }

  verifyHeaderText(expectedText) {
    cy.get('.header-green > .container > .columns > :nth-child(1) > .heading-level-1').invoke('text').should('eq', expectedText);
  }

  verifySubheaderText(expectedText) {
    cy.get('.subheading').invoke('text').should('eq', expectedText);
  }
}

export default new AboutPage();
*/