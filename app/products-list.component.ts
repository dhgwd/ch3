import { Component } from "@angular/core";
import { Product } from './product';

@Component({
    selector: 'products-list',
    templateUrl: 'products-list.component.html',
    styleUrls: ['products-list.component.css'],
    inputs: ['productsList']
})
export class Productslistcomponent {
    productsList: Product[];
    constructor() {

    }
}