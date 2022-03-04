import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-head',
  templateUrl: './page-head.component.html',
  styleUrls: ['./page-head.component.css']
})
export class PageHeadComponent implements OnInit {
  @Input()text1 = '';
  @Input()text2 = '';
  @Input()text3 = '';
  constructor() { }

  ngOnInit(): void {
  }

}
