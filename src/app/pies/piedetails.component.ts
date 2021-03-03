import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderItem } from '../order/order';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-piedetails',
  templateUrl: './piedetails.component.html',
  styleUrls: ['./piedetails.component.css']
})
export class PiedetailsComponent implements OnInit {

  product : IProduct;
  errorMessage:string;
  
  constructor(private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id=+this.route.snapshot.paramMap.get('id');
    
    this.productService.getProductsById(id).subscribe({
      next:product=>this.product=product,
      error:err=>this.errorMessage=err
      }
    );
  }

  onAddToBasket(){

    let orderItem = new  OrderItem();
    orderItem.product=this.product;
    orderItem.quantity=1;
    this.productService.putBasket(orderItem);
  }

}
