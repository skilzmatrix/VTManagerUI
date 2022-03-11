import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  collapseShow   = true;
  condition      = true;
  panelOpenState = true;

  ngOnInit() {
  }

  toggleCollapseShow() {
    this.collapseShow = !this.collapseShow;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  backButtonActive = true;

  constructor(private breakpointObserver: BreakpointObserver, private _location: Location) {
  }

  backClicked() {
    this._location.back();
  }


}
