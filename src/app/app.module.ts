import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PielistComponent } from './pies/pielist.component';
import { OrderComponent } from './order/order.component';
import { PiedetailsComponent } from './pies/piedetails.component';
import { EmitService } from './sharedservice/EmitService';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PielistComponent,
    OrderComponent,
    PiedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers:[EmitService],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
