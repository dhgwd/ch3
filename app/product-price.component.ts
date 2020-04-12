import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-price',
    template: `\${{price}}`
})
export class Productpricecomponent {
    @Input() price: number;
    constructor() {

    }
}