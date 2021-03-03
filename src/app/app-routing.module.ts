import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { OrderComponent } from './order/order.component';
import { PiedetailsComponent } from './pies/piedetails.component';
import { PielistComponent } from './pies/pielist.component';
import { ProductDetailsGuard } from './pies/productdetailsguard';

const routes: Routes = [
  { path: 'order', component: OrderComponent },
  {path: 'piedetails/:id',canActivate:[ProductDetailsGuard],
  component:PiedetailsComponent},
  { path: 'pielist', component: PielistComponent },
  { path: 'welcome', component: WelcomeComponent },
  {path: '',redirectTo:'welcome',pathMatch:'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class  AppRoutingModule { }
