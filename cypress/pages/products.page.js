import {PRODUCT_PAGE_CONSTANTS} from '../identifiers';

const {
    dataSortElement, 
    productsTitle,
    hamburgerMenu,
    shoppingcart,
    addToCartGeneric,
    productPrice,
    productDescription} = PRODUCT_PAGE_CONSTANTS;

export class ProductsPage{

    constructor() {}

    getSortElement(){
        return cy.get(dataSortElement);
    }

    getProductsTitle(){
        return cy.get(productsTitle);
    }

    getHamburgermenu(){
        return cy.get(hamburgerMenu);
    }

    getAddToCartGeneric(){
        return cy.get(addToCartGeneric);
    }

    getProductPriceGeneric(){
        return cy.get(productPrice);
    }

    getProductDescription(){
        return cy.get(productDescription);
    }

    getShoppingcart(){
        return cy.get(shoppingcart);
    }
    addProductToCart(productIdentifier){
        cy.get(productIdentifier).click();
    }

    navigateToShoppingCart(){
        cy.get(shoppingcart).click();
    }
    

}

export default ProductsPage;