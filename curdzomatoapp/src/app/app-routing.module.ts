import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './components/foods/foods.component';
import { RestarantfooditemsComponent } from './components/restarantfooditems/restarantfooditems.component';
import { RestaurantservingfoodComponent } from './components/restaurantservingfood/restaurantservingfood.component';


const routes: Routes = [ 
  {
    path:'**',
    component:FoodsComponent
  },
    {
    path: 'foods',
    component: FoodsComponent
  },
  {
    path: 'restaurant-foods/:id',
    component: RestarantfooditemsComponent
  }, 
  {
    path: 'restaurant-food-item/:restaurantId/:categoryId',
    component: RestaurantservingfoodComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }