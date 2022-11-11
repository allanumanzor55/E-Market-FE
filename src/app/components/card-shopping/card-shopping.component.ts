import { Component, Input, OnInit } from '@angular/core';
import { shopping } from 'contants';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-card-shopping',
  templateUrl: './card-shopping.component.html',
  styleUrls: ['./card-shopping.component.scss']
})
export class CardShoppingComponent implements OnInit {

  @Input() type: "shoppingCard" | "shoppingHistory" = "shoppingCard"
  @Input() product: shopping = {
    nameProduct:"",
    price:"",
    idProduct:-1,
    amount:-1,
    date:"",
    imageRute:""
  }

  productAmount=new FormGroup({
    amount: new FormControl('', [Validators.required] )
  });

  get amount():FormControl{
    return this.productAmount.get('amount') as FormControl
  }

  constructor() { }

  ngOnInit(): void {
  }

}
