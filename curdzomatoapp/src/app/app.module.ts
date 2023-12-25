import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoodsComponent } from './components/foods/foods.component';
import { RestaurantservingfoodComponent } from './components/restaurantservingfood/restaurantservingfood.component';
import { RestarantfooditemsComponent } from './components/restarantfooditems/restarantfooditems.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    RestaurantservingfoodComponent,
    RestarantfooditemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
