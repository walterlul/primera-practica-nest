export enum ProductType {
    BIDON = 'BIDON',
    DISPENSER = 'DISPENSER'
}

export class Product {
    id: string;
    name: string;
    price: number;
    type: ProductType;
}