import {ProductsPage} from '../../pages/products.page';
import {LoginPage} from '../../pages/login.page';
import { PRODUCT_PAGE_CONSTANTS} from '../../identifiers';

const { 
   productsTitle,
   hamburgerMenu, 
   shoppingcart, 
   product1Div } = PRODUCT_PAGE_CONSTANTS;


describe('Product page tests', () => {

    const login =  new LoginPage();
    const products = new ProductsPage();

    beforeEach(() => {
        login.typeUserName("standard_user");
        login.typePassword("secret_sauce");
        login.clickLogin();
     });

     context('Static text related tests', () =>{

        it('Verify title of each product', () => {
            cy.get(product1Div).eq(0).should('have.text','Sauce Labs Backpack');
            cy.get(product1Div).eq(1).should('have.text','Sauce Labs Bike Light');
            cy.get(product1Div).eq(2).should('have.text','Sauce Labs Bolt T-Shirt');
            cy.get(product1Div).eq(3).should('have.text','Sauce Labs Fleece Jacket');
            cy.get(product1Div).eq(4).should('have.text','Sauce Labs Onesie');
            cy.get(product1Div).eq(5).contains('T-Shirt (Red)');
        });


     })
     
});
