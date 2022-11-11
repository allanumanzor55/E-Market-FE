import { Component, OnInit, Input } from '@angular/core';
import { TUserRoles } from 'contants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() currentSubDir = '';
  // temporal
  @Input() currentRole: TUserRoles = 'admin';

  constructor() {}

  ngOnInit(): void {}
}
