import { Component, Input, OnInit } from '@angular/core';
import { SECTION_DATA } from 'src/app/data/sections';
import { ResponseV1 } from 'src/app/models/responsev1';
import { Section } from 'src/app/models/section';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() response!: ResponseV1;

  sections: Section[] = SECTION_DATA;

  ngOnInit(): void {
    console.log('on init');
  }

}
