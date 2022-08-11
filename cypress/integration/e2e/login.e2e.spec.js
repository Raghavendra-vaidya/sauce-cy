import {LoginPage} from '../../pages/login.page';
import {ProductsPage} from '../../pages/products.page';

describe('Login screen e2e tests', () => 
{   
     const login =  new LoginPage();
     const products = new ProductsPage();

    it('Lgin as successful user', () => {
        login.typeUserName("standard_user");
        login.typePassword("secret_sauce");
        login.clickLogin();
        products.getProductsTitle().should('be.visible');
        products.getSortElement().should('be.visible');
    });

});