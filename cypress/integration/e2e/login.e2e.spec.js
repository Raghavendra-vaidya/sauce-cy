import {LoginPage} from '../../pages/login.page';
import {ProductsPage} from '../../pages/products.page';
import {PRODUCT_PAGE_CONSTANTS, SHOPPING_CART_CONSTANTS} from '../../identifiers';

describe('Login screen e2e tests', () => 
{   
     const login =  new LoginPage();
     const products = new ProductsPage();

     beforeEach(() => {
        login.typeUserName("standard_user");
        login.typePassword("secret_sauce");
        login.clickLogin();
     });
     
     

    it('Lgin as successful user verify product page title, sort element, hamburger menu', () => {
        products.getProductsTitle().should('be.visible');
        products.getSortElement().should('be.visible');
        products.getHamburgermenu()
        .should('be.visible')
        .should('have.text', "Open Menu")
    });

    it('Should login and add backpack to cart, verify', () => {
        products.addProductToCart(PRODUCT_PAGE_CONSTANTS.backpackAddToCard);
        cy.get(PRODUCT_PAGE_CONSTANTS.backpackRemoveFromCart).should('be.visible');
        products.navigateToShoppingCart();
        cy.get(SHOPPING_CART_CONSTANTS.itemTitle)
        .should('be.visible')
        .should('have.text','Sauce Labs Backpack');

    });


});