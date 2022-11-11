import { Component, OnInit, Input } from '@angular/core';
import { FormGroupDirective, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss'],
})
export class ImageInputComponent implements OnInit {
  @Input() name = '';

  srcImage = '';
  form!: FormGroup;

  getImage(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target.files?.length) return;
    const reader = new FileReader();
    reader.onload = () => {
      this.srcImage = reader.result as string;
    };
    const file = target.files[0];
    reader.readAsDataURL(file);
    this.form.patchValue({
      [this.name]: file,
    });
  }

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
