import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: number = 0;
  showLimit: boolean = false;

  onValueIncreased(valueIncreased: number) {
    this.value = valueIncreased;
  }

  onLimitReached() {
    this.showLimit = true;
  }
}
