import { Component, OnInit } from '@angular/core';
import { Menu } from './models/menu';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  menu?: Menu; 
  header: any;
  footer: any;

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(res => {
      this.menu = res.content;
    });
  }

}
