import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() showSection = new EventEmitter<string>();

  onMenuClick = function(view: string) {
    this.showSection.emit(view);
  };
}
