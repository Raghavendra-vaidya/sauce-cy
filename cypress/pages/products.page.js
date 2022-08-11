import {PRODUCT_PAGE_CONSTANTS} from '../identifiers';

const {dataSortElement, productsTitle} = PRODUCT_PAGE_CONSTANTS;


export class ProductsPage{

    constructor() {}

    getSortElement(){
        return cy.get(dataSortElement);
    }

    getProductsTitle(){
        return cy.get(productsTitle);
    }

}

export default ProductsPage;