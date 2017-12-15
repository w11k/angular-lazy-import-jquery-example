import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private lazylod: Promise<{ activate }>;

  loadLazyloadPlugin() {
    this.lazylod = import('./plugin-lazyload');
  }

  async activateLazyloadPlugin() {
    if (this.lazylod) {
      const plugin = await this.lazylod;

      plugin.activate();
    }
  }

  async loadAndActivateRangesliderPlugin() {
    const plugin = await import('./plugin-rangeslider');
    plugin.activate();
  }
}
