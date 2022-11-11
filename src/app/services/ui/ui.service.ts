import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showNavbar = new BehaviorSubject(true);

  constructor() {}

  setShowNavbar(show: boolean) {
    this.showNavbar.next(show);
  }

  getShowNavbar() {
    return this.showNavbar;
  }
}
