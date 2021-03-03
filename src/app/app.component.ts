import { Component, OnInit } from '@angular/core';
import { ProductService } from './pies/product.service';
import { Basket, Order, OrderItem } from './order/order';
import { EmitService } from './sharedservice/EmitService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'DuraiAppPie';
  recordCount:number=0;

  constructor(private productService:ProductService,private emitSvc : EmitService) {
  }

  
  ngOnInit(): void {
    this.emitSvc.emitter.subscribe(num=>{
      this.recordCount = num;
      console.log ( 'Component One Received ${num}');
    });

    this.productService.getBasket().subscribe({
      next:basket=>{
        if (basket && basket.orderItems && basket.orderItems.length>0)
          {
            this.recordCount=basket.orderItems.length;
          }
          
      }
    });
  }

  
}
