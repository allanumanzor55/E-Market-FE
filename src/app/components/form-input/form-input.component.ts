import { Component, OnInit, Input } from '@angular/core';
import { generate } from 'shortid';
import { dataSelect } from 'contants';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input() type: 'image' | 'text' | 'switch' | 'select' | 'password' = 'text';
  @Input() data: dataSelect[] = [];
  @Input() labelText = '';
  @Input() name: string = '';
  @Input() bottomAction: { text: string; action: () => void } | undefined;

  inputId = '';

  constructor() {}

  ngOnInit(): void {
    this.inputId = generate();
  }
}
