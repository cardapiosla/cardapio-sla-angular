import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() menu: Menu | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log('on init');
  }

}
