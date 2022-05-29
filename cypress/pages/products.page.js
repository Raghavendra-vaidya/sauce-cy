import {PRODUCT_PAGE_CONSTANTS} from '../identifiers';

const {dataSortElement} = PRODUCT_PAGE_CONSTANTS;

export class ProductsPage{

    constructor() {}

    getSortElement(){
        return cy.get(dataSortElement);
    }



}

export default ProductsPage;