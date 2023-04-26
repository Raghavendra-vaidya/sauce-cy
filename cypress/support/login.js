import { LOGIN_PAGE_CONSTANTS } from "../identifiers/loginConstants";

Cypress.Commands.add('typeUserName', (userNameValue) => {
    cy.get(LOGIN_PAGE_CONSTANTS.username).type(userNameValue);
})

Cypress.Commands.add('clickLogin', () => {
    cy.get(LOGIN_PAGE_CONSTANTS.loginBtn).click();
})

Cypress.Commands.add('typePassword', (passwordValue) => {
    cy.get(LOGIN_PAGE_CONSTANTS.password).type(passwordValue);
})