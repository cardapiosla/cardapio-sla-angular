import { Component, Input, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { Item } from 'src/app/models/item';
import { Section } from 'src/app/models/section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent implements OnInit {

  @Input() section: Section | undefined;

  constructor() { }

  ngOnInit(): void {
    const item = { name: 'teste', description: 'teste' };
    this.section?.items.push(item);
    
    setTimeout(() => {
      this.section?.items.push(item);
      console.log(this.section);
      
      }, 1000);

  }

}
