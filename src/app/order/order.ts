import { IProduct } from '../pies/product';

export class OrderItem{
    product:IProduct;
    quantity:number;
    totalPrice:number;
}

export class Order{
    orderId:number;
    orderDate:Date;
    orderItems:OrderItem[];
    orderTotalAmount:number;
    remarks:string;
    address:Address;

}

export class Address{
    firstName:string;
    lastName:string;
    email:string;
    street:string;
    zipCode:string;
    city:string;
    state:string;
    country:string;
}

export class Basket{
    userId:string;
    orderItems:OrderItem[]
}
