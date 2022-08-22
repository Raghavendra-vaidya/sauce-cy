import {LoginPage} from '../../pages/login.page';
import {ProductsPage} from '../../pages/products.page';

describe('Products screen e2e tests', () => 
{   
     const login =  new LoginPage();
     const products = new ProductsPage();

     beforeEach(() => {
        login.typeUserName("standard_user");
        login.typePassword("secret_sauce");
        login.clickLogin();
     });
     
     

    it('Navigate to shopping cart', () => {
        products.navigateToShoppingCart();
    });

});