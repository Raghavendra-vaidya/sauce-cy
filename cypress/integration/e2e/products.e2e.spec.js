import { LoginPage } from '../../pages/login.page';
import { ProductsPage } from '../../pages/products.page';

describe('Products screen e2e tests', () => {
    const products = new ProductsPage();

    beforeEach(() => {
        cy.typeUserName("standard_user");
        cy.typePassword("secret_sauce");
        cy.clickLogin();
    });



    it('Navigate to shopping cart', () => {
        products.navigateToShoppingCart();
    });

});