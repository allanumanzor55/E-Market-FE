import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() image = '';
  @Input() title = '';
  @Input() subTitle: string | undefined;
  @Input() text: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
