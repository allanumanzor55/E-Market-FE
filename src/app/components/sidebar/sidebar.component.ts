import { Component, OnInit, Input } from '@angular/core';
import { SIDEBAR_OPTIONS, TUserRoles, TSidebarOption } from 'contants';

const titles: Record<TUserRoles, string> = {
  admin: 'Admin',
  customer: 'Customer',
  company: 'Company admin',
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() role: TUserRoles = 'admin';
  @Input() activeDir = '';
  title: string = '';
  options: TSidebarOption[] = [];

  constructor() {}
  ngOnInit(): void {
    this.options = SIDEBAR_OPTIONS.filter((option) =>
      option.roles.includes(this.role)
    );
    this.title = titles[this.role];
  }
}
