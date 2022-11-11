import { Component, OnInit } from '@angular/core';
import { shopping } from 'contants';

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.scss'],
})
export class ShoppingHistoryComponent implements OnInit {
  productShopping: shopping[] = [
    {
      nameProduct:
        'Calcetines de compresion, Calcetines de compresion, Calcetines de compresion, Calcetines de compresion, Calcetines de compresion',
      price: '18000',
      idProduct: 1,
      amount: 3,
      imageRute: '../../../assets/images/logo-company-test/BIG.png',
      date: '12/12/12',
    },
    {
      nameProduct: 'Calcetines de compresion',
      price: '180',
      idProduct: 1,
      amount: 2,
      imageRute: '../../../assets/images/logo-company-test/BIG.png',
      date: '12/12/12',
    },
    {
      nameProduct: 'Calcetines de compresion',
      price: '180',
      idProduct: 1,
      amount: 1,
      imageRute: '../../../assets/images/logo-company-test/BIG.png',
      date: '12/12/12',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
