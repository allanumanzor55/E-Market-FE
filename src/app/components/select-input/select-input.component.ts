import { Component, OnInit, Input } from '@angular/core';
import { dataSelect } from 'contants';
import { FormGroupDirective, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
})
export class SelectInputComponent implements OnInit {
  @Input() inputId: string = '';
  @Input() name: string = '';
  @Input() data: dataSelect[] = [];

  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
