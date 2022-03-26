import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaloriesService {

  // Request URL: https://www.myfitnesspal.com/public/nutrition?q=arroz&page=1&per_page=10
  // https://caloriasporalimentoapi.herokuapp.com/api/calorias/?descricao=alface

  apiUrl: string = 'https://myfitnesspal.com/public/nutrition?q={0}';

  constructor(private http: HttpClient) { }

  getCalories(food: string): Observable<any> {
    return this.http.get<Response>(this.apiUrl.replace('{0}', food));
  }

}