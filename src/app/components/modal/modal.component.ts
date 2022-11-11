import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() isOpen = true;
  @Output() closeModalEvent = new EventEmitter();

  handleClose() {
    this.closeModalEvent.emit();
  }

  preventPropagation(event: Event) {
    event.stopPropagation();
  }

  constructor() {}
}
