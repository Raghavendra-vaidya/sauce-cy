
import { LoginPage } from '../../pages/login.page';
import { ProductsPage } from '../../pages/products.page';
import data from '../../test-data/loginPageData.json';




describe('Login screen IT tests', () => {
    const login = new LoginPage();
    const products = new ProductsPage();

    it('Verify all the fields are loaded', () => {
        login.getUsernameElement().should('be.visible');
        login.getPasswordElement().should('be.visible');
        login.getLoginCredSection().should('be.visible');
        login.getPasswordCredsElement().should('be.visible');
        login.getBrandImageElement().should('be.visible');

    });

    it('Verify accepted username and password section is visible', () => {
        login.getLoginCredSection().should('be.visible');
        login.getPasswordCredsElement().should('be.visible');
    });



    context("Verify field validations on login page", () => {


        it('Verify mandatory username', () => {
            cy.clickLogin();
            login.getErrorClassElement().should('be.visible');
            login.geterrorMessageElement().contains(data.userNameMandatory)

        });

        it('Verify mandatory password', () => {
            cy.typeUserName(data.username);
            cy.clickLogin();
            login.getErrorClassElement().should('be.visible');
            login.geterrorMessageElement().contains(data.passwordMandatory)

        });

        it('Verify invalid user', () => {
            cy.typeUserName('asdasd');
            cy.typePassword('asdas');
            cy.clickLogin();
            login.geterrorMessageElement().contains(data.invalidUser)
        });


    });

    context("Verify Login", () => {

        it('Verify successful login', () => {
            cy.typeUserName(data.username);
            cy.typePassword(data.password);
            cy.clickLogin();
            products.getSortElement().should('be.visible');
        });


    });


}
)