import { Component, OnInit } from '@angular/core';

import { UiService } from './services/ui/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private uiService: UiService) {}

  currentLocation = '/';
  title = 'online-market-fe';
  showNavbar = true;

  ngOnInit() {
    this.uiService.getShowNavbar().subscribe((show) => {
      this.showNavbar = show;
    });
  }
}
