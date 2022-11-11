import { Component, OnInit } from '@angular/core';
import { shopping } from 'contants';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  

  countProducts(){
    let cont=0
    for (let i = 0; i < this.productShopping.length; i++) {
      cont+=this.productShopping[i].amount
    }
    return cont
  }

  subtotal(){
    let cont:number=0
    for (let i = 0; i < this.productShopping.length; i++) {
      cont += +this.productShopping[i].price
    }
    return cont
  }

  productShopping:shopping[]=[
    {
      nameProduct:"Calcetines de compresion",
      price:"180",
      idProduct:1,
      amount:3,
      imageRute:"../../../assets/images/logo-company-test/BIG.png",
      date:"12/12/12",
    },
    {
      nameProduct:"Calcetines de compresion",
      price:"180",
      idProduct:1,
      amount:2,
      imageRute:"../../../assets/images/logo-company-test/BIG.png",
      date:"12/12/12",
    },
    {
      nameProduct:"Calcetines de compresion",
      price:"180",
      idProduct:1,
      amount:1,
      imageRute:"../../../assets/images/logo-company-test/BIG.png",
      date:"12/12/12",
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
