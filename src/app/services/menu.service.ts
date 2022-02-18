import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenu2() {
    return this.http.get<Response<Menu>>('https://cardapio-sla-default-rtdb.firebaseio.com/cardapio.json');
  }

  getMenu() {
    return this.http.get<Menu>('https://cardapio-sla-default-rtdb.firebaseio.com/cardapio.json');
  }




}
