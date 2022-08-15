import {ProductsPage} from '../../pages/products.page';
import {LoginPage} from '../../pages/login.page';
import { Context } from 'mocha';

describe('Product page tests', () => {

    const login =  new LoginPage();
    const products = new ProductsPage();

    beforeEach(() => {
        login.typeUserName("standard_user");
        login.typePassword("secret_sauce");
        login.clickLogin();
     });

     context('Static text related tests', () =>{

        it('', () => {
            
        });


     })
     
});
