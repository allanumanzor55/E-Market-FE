import { Component, OnChanges, Input } from '@angular/core';
import { SIDEBAR_OPTIONS } from 'contants';

@Component({
  selector: 'app-sidebar-btn',
  templateUrl: './sidebar-btn.component.html',
  styleUrls: ['./sidebar-btn.component.scss'],
})
export class SidebarBtnComponent implements OnChanges {
  @Input() optionItem: typeof SIDEBAR_OPTIONS[number] | undefined;
  @Input() isActive: boolean | undefined;

  classNames = {
    'is-active': false,
  };

  constructor() {}

  ngOnChanges(): void {
    this.classNames = {
      'is-active': !!this.isActive,
    };
  }
}
