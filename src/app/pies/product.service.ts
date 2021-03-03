import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IProduct } from './product';
import { JsonPipe } from '@angular/common';
import { Basket, OrderItem } from '../order/order';
import { EmitService } from '../sharedservice/EmitService';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
  })
export class ProductService{

    private serviceUrl=environment.apiUrl;
    private  productUrl= this.serviceUrl + 'api/product';
    private  basketUrl= this.serviceUrl + 'api/basket';

    constructor(private http: HttpClient,private emitSvc : EmitService){ }

    getProducts(): Observable<IProduct[]> {

        return this.http.get<IProduct[]>(this.productUrl)
          .pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );

      }

      getProductsById(id: number): Observable<IProduct | undefined>  {
          let url=this.productUrl +'/' + id;
          return this.http.get<IProduct>(url).pipe(
              tap(data=>console.log('Produt: ' + JSON.stringify(data))),
              catchError(this.handleError)
          );
      }

      putBasket(orderitem: OrderItem) {

        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
            
        let basket =new Basket();
        basket.userId='durai';
        basket.orderItems=[];
        basket.orderItems.push(orderitem);

        let body = JSON.stringify( basket ); 

        this.http.put(this.basketUrl +'/durai' , body,{headers: headers}).subscribe(
          data=>{
           let count=+data;
            this.emitSvc.emitter.emit(count);
            console.log('Produt: ' + JSON.stringify(data));
        },
          error =>console.log(error));  

      }

      getBasket(): Observable<Basket | undefined> {
            
        return this.http.get<Basket>(this.basketUrl +'/durai')
        .pipe(
          tap(data => {
            console.log('All: ' + JSON.stringify(data));
          }),
          catchError(this.handleError)
        );

      }


      private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
    
}