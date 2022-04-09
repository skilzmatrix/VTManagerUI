import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product-details',
  templateUrl: './new-product-details.component.html',
  styleUrls: ['./new-product-details.component.css']
})
export class NewProductDetailsComponent implements OnInit {
  title1="Products";
  title2="Home -";
  title3="Products";
  openTab = 1;
  checked=true;
  cities                                           = ['en', 'fr', 'es'];

  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
