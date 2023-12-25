import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
apiEndPoint : string = "http://freeapi.miniprojectideas.com/api/zomato/";

  constructor(private httpClient:HttpClient) { }

  getAllFoods():Observable<any>{
    return this.httpClient.get(this.apiEndPoint +"GetAllFoodCategory")
  }
}
