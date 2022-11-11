import { Component, OnInit } from '@angular/core';
import { CREATE_USER } from 'contants';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  srcImage=""
  image=""

  getImage(event:any):any{
    if (event.target.files.length>0) {
      const reader = new FileReader();
      reader.onload=(event:any)=>{
        this.srcImage=event.target.result;
      };
      reader.readAsDataURL(event.target.files[0])
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.srcImage=CREATE_USER
    this.image=CREATE_USER
  }

}
