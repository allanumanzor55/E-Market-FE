import { Component, OnInit, Input } from '@angular/core';

type btnClassNames = 'primary-btn' | 'outline-btn' | 'full-width';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: 'primary' | 'secondary' | 'outline' | '' = '';
  @Input() text = '';
  @Input() redirectTo = '';
  @Input() fullWidth = false;
  @Input() onClick: (() => void) | undefined;

  handleClick() {
    if (this.onClick) this.onClick();
  }

  classNames: Record<btnClassNames, boolean> = {
    'outline-btn': false,
    'primary-btn': false,
    'full-width': false,
  };

  typeClass = '';

  constructor() {}

  ngOnInit(): void {
    this.classNames = {
      ...this.classNames,
      [`${this.type}-btn`]: true,
      'full-width': this.fullWidth,
    };
  }
}
