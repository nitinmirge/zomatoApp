import { Component } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent {

   foodItems:any[]=[];
  constructor(private foodService:FoodService){}

  ngOnInit():void{
    this.loadAllCategory()
  }

  loadAllCategory(){
    this.foodService.getAllFoods().subscribe((res:any)=>{
     this.foodItems=res.data;
    });
  }
}
