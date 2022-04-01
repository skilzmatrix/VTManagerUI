import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
interface Users {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-order-list-details',
  templateUrl: './order-list-details.component.html',
  styleUrls: ['./order-list-details.component.css']
})
export class OrderListDetailsComponent implements OnInit {
  title1="Orders List Details";
  title2="Home - Orders - ";
  title3="Orders List";
  users = ['Iggy Matheeuwsen ','Iggy Matheeuwsen 1']
  selected=[];
  usersControl= new FormControl();
  avlUsers = ['Iggy Matheeuwsen ','Iggy Matheeuwsen 1']
  remove(user: string): void {
    const index = this.users.indexOf(user);

    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }
  onCatRemoved(user: string) {
    const users = this.usersControl.value as string[];
    this.remove(user);
    this.usersControl.setValue(this.users); // To trigger change detection
  }

  constructor() { }

  ngOnInit(): void {
  }

}
