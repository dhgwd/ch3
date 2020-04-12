import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-image',
    template: `< img [src]="url" class"image-thumbnail">`
})
export class Productimagecomponent {
    @Input() url: string;
}