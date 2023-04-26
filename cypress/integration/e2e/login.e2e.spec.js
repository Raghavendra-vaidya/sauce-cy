import { LoginPage } from '../../pages/login.page';
import { ProductsPage } from '../../pages/products.page';

describe('Login screen e2e tests', () => {
    const login = new LoginPage();
    const products = new ProductsPage();

    beforeEach(() => {
        cy.typeUserName("standard_user");
        cy.typePassword("secret_sauce");
        cy.clickLogin();
    });



    it('Lgin as successful user verify product page title, sort element, hamburger menu', () => {
        products.getProductsTitle().should('be.visible');
        products.getSortElement().should('be.visible');
        products.getHamburgermenu()
            .should('be.visible')
            .should('have.text', "Open Menu")
    });

});