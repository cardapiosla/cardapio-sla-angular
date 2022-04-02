import { Component, OnInit } from '@angular/core';
import { Menu } from './models/menu';
import { MenuService } from './services/menu.service';
import { ResponseV1 } from './models/responsev1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // menu?: Menu; 
  title = 'cardapio-sla-angular';
  menu!: ResponseV1;
  menu2: Menu | undefined;
  selectedDate: string | undefined;
  selectedLanguage: string | undefined = 'pt';

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.getMenuV1().subscribe((res: ResponseV1[]) => {
      this.menu = res[0];
      // TODO get the data from the response inside the menu
    });
  }

}
