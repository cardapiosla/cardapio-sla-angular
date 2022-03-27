import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu';
import { Response } from '../models/response';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseV1 } from '../models/responsev1';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  url = environment.serviceUrl;

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Response<Menu>> {
    return this.http.get<Response<Menu>>(this.url);
  }

  getMenuV1(): Observable<ResponseV1[]> {
    return this.http.get<ResponseV1[]>(this.url);
  }

}
