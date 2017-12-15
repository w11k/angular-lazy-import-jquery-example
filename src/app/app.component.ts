import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private powertour: Promise<{ activate }>;

  loadJQuery() {
    this.powertour = import('./powertour');
  }

  async activate() {
    if (this.powertour) {
      const powertour = await this.powertour;

      powertour.activate();
    }
  }
}
