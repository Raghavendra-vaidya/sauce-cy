import { ProductsPage } from '../../pages/products.page';
import { LoginPage } from '../../pages/login.page';
import { PRODUCT_PAGE_CONSTANTS } from '../../identifiers';

const { product1Div } = PRODUCT_PAGE_CONSTANTS;


describe('Product page tests', () => {

   const login = new LoginPage();
   const products = new ProductsPage();

   beforeEach(() => {
      cy.typeUserName("standard_user");
      cy.typePassword("secret_sauce");
      cy.clickLogin();
   });

   context('Static text related tests for products page', () => {

      it('Should verify title of each product', () => {
         cy.get(product1Div).eq(0).should('have.text', 'Sauce Labs Backpack');
         cy.get(product1Div).eq(1).should('have.text', 'Sauce Labs Bike Light');
         cy.get(product1Div).eq(2).should('have.text', 'Sauce Labs Bolt T-Shirt');
         cy.get(product1Div).eq(3).should('have.text', 'Sauce Labs Fleece Jacket');
         cy.get(product1Div).eq(4).should('have.text', 'Sauce Labs Onesie');
         cy.get(product1Div).eq(5).contains('T-Shirt (Red)');
      });

      it('Should verify price is displayed for each product', () => {
         products.getProductPriceGeneric().eq(0).should('be.visible');
         products.getProductPriceGeneric().eq(1).should('be.visible');
         products.getProductPriceGeneric().eq(2).should('be.visible');
         products.getProductPriceGeneric().eq(3).should('be.visible');
         products.getProductPriceGeneric().eq(4).should('be.visible');
         products.getProductPriceGeneric().eq(5).should('be.visible');
      });

      it('Should verify add to cart button is displayed for all the products', () => {
         products.getAddToCartGeneric().eq(0).should('be.visible');
         products.getAddToCartGeneric().eq(1).should('be.visible');
         products.getAddToCartGeneric().eq(2).should('be.visible');
         products.getAddToCartGeneric().eq(3).should('be.visible');
         products.getAddToCartGeneric().eq(4).should('be.visible');
         products.getAddToCartGeneric().eq(5).should('be.visible');
      });

      it('Should verify description is displayed for all products', () => {
         products.getProductDescription().eq(0).should('be.visible')
         products.getProductDescription().eq(1).should('be.visible')
         products.getProductDescription().eq(2).should('be.visible')
         products.getProductDescription().eq(3).should('be.visible')
         products.getProductDescription().eq(4).should('be.visible')
         products.getProductDescription().eq(5).should('be.visible')
      });
   })

   it('Should verify Product lable is displayed in products page', () => {
      products.getProductsTitle().should('be.visible')
   });

   it('Should verify Hamburger menu is displayed in products page', () => {
      products.getHamburgermenu().should('be.visible')
   });

   it('Should verify shopping cart is displayed in products page', () => {
      products.getShoppingcart().should('be.visible')
   })

});
