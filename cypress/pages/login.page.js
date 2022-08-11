import { LOGIN_PAGE_CONSTANTS } from '../identifiers';


const {
    username, 
    password, 
    loginBtn, 
    brandImage, 
    botIcon, 
    loginCredsSection, 
    loginPasswordSection, 
    errorClass, 
    errorMessageElement } = LOGIN_PAGE_CONSTANTS;

export class LoginPage {


    constructor() { }

    // get element functions

    getUsernameElement() {
        return cy.get(username);
    }

    getPasswordElement() {
        return cy.get(password);
    }

    getLoginButtonELement() {
        return cy.get(loginBtn);
    }

    getBrandImageElement() {
        return cy.get(brandImage);
    }

    getBotImageElement() {
        return cy.get(botIcon);
    }

    getLoginCredSection() {
        return cy.get(loginCredsSection);
    }

    getPasswordCredsElement() {
        return cy.get(loginPasswordSection);
    }

    getErrorClassElement(){
        return cy.get(errorClass);
    }

    geterrorMessageElement(){
        return cy.get(errorMessageElement);
    }

    // action functions

    typeUserName(userNameValue) {
        this.getUsernameElement().type(userNameValue)
    }

    typePassword(passwordValue) {
        this.getPasswordElement().type(passwordValue);
    }

    clickLogin() {
        this.getLoginButtonELement().click();
    }

}

export default LoginPage;