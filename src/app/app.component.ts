import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sectionShown = 'Recipes';

  onSectionSelection = function (view: string) {
    this.sectionShown = view;
  };
}

