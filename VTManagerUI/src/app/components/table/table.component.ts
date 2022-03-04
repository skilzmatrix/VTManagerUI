import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  exHeadFill=false;
  @ViewChild(MatPaginator,{static:true}) paginator?: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
