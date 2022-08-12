import {PRODUCT_PAGE_CONSTANTS} from '../identifiers';

const {
    dataSortElement, 
    productsTitle,
    hamburgerMenu,
    shoppingcart} = PRODUCT_PAGE_CONSTANTS;

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

    addProductToCart(productIdentifier){
        cy.get(productIdentifier).click();
    }

    navigateToShoppingCart(){
        cy.get(shoppingcart).click();
    }

}

export default ProductsPage;