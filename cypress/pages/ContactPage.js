/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';

class ContactPage {
    elements = {
        nameInput: () => cy.get('#Naam'),
        emailInput: () => cy.get('#Email'),
        companyInput: () => cy.get('#Bedrijf-3'),
        phoneNumberInput: () => cy.get('#Telefoon-3'),
        termsCheckbox: () => cy.get('#w-node-c29b9f6d-8d0a-a876-360d-636cba9f04b6-ba9f04a8 > .checkbox-label'),
        submitButton: () => cy.get('#w-node-c29b9f6d-8d0a-a876-360d-636cba9f04ba-ba9f04a8')
    };

    visitContactPage() {
        this.clickContactButton();
        this.verifyContactPage();
    }

    fillName() {
        const fakeName = faker.person.firstName();
        this.elements.nameInput().type(fakeName);
    }

    fillEmail() {
        const fakeEmail = faker.internet.email();
        this.elements.emailInput().type(fakeEmail);
    }

    fillCompany() {
        const fakeCompany = faker.company.name();
        this.elements.companyInput().type(fakeCompany);
    }

    fillPhoneNumber() {
        const fakeNumber = faker.phone.number('+351 ### ### ###');
        this.elements.phoneNumberInput().type(fakeNumber);
    }

    agreeToTerms() {
        this.elements.termsCheckbox().click();
    }

    submitForm() {
        this.elements.submitButton().click();
    }

    validateNameErrorMessage() {
        this.validateErrorMessage(this.elements.nameInput(), 'Please fill out this field.');
    }

    validateEmailErrorMessage() {
        this.validateErrorMessage(this.elements.emailInput(), 'Please fill out this field.');
    }

    validateCompanyErrorMessage() {
        this.validateErrorMessage(this.elements.companyInput(), 'Please fill out this field.');
    }

    validatePhoneNumberErrorMessage() {
        this.validateErrorMessage(this.elements.phoneNumberInput(), 'Please fill out this field.');
    }

    clickContactButton() {
        cy.get('.nav-list > .button-new').click();
    }

    verifyContactPage() {
        cy.get('.nav-list > .button-new').invoke('text').should('eq', 'Contact');
        cy.get('.heading-level-1').invoke('text').should('eq', 'Contact');
        cy.get('.subheading-level-2').contains('Meer weten of behoefte aan een demo?');
    }

    validateErrorMessage(element, expectedMessage) {
        element.each(($input) => {
            expect($input[0].validationMessage).to.eq(expectedMessage);
        });
    }
}

export default new ContactPage();



/*
/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';

class ContactPage {

    elements = {
        fakeName: () => cy.get('#Naam'),
        fakeEmail: () => cy.get('#Email'),
        fakeCompany: () => cy.get('#Bedrijf-3'),
        fakeNumber: () => cy.get('#Telefoon-3')
    };

    visitContactPage() {
        cy.get('.nav-list > .button-new').click();
        cy.get('.nav-list > .button-new').invoke('text').should('eq', 'Contact');
        cy.get('.heading-level-1').invoke('text').should('eq', 'Contact');
        cy.get('.subheading-level-2').contains('Meer weten of behoefte aan een demo?');
    }

    fillName() {
        const fakeName = faker.person.firstName();
        this.elements.fakeName().type(fakeName);
    }

    fillEmail() {
        const fakeEmail = faker.internet.email();
        this.elements.fakeEmail().type(fakeEmail);
    }

    fillCompany() {
        const fakeCompany = faker.company.name();
        this.elements.fakeCompany().type(fakeCompany);
    }

    fillPhoneNumber() {
        const fakeNumber = faker.phone.number('+351 ### ### ###');
        this.elements.fakeNumber().type(fakeNumber);
    }

    agreeToTerms() {
        cy.get('#w-node-c29b9f6d-8d0a-a876-360d-636cba9f04b6-ba9f04a8 > .checkbox-label').click();
    }

    submitForm() {
        cy.get('#w-node-c29b9f6d-8d0a-a876-360d-636cba9f04ba-ba9f04a8').click();
    }

    validateNameErrorMessage() {
        cy.get('#Naam').each(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.');
        });
    }

    validateEmailErrorMessage() {
        cy.get('#Email').each(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.');
        });
    }

    validateCompanyErrorMessage() {
        cy.get('#Bedrijf-3').each(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.');
        });
    }

    validatePhoneNumberErrorMessage() {
        cy.get('#Telefoon-3').each(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.');
        });
    }
}

export default new ContactPage();
*/