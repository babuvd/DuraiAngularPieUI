import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './pielist.component.html',
  styleUrls: ['./pielist.component.css']
})
export class PielistComponent implements OnInit {

  products:IProduct[]=[];
  errorMessage: string = '';
  
  constructor(private productService: ProductService){
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next:products=>{
          this.products=products;
      },
      error:err=>this.errorMessage=err
    });
  }

}
