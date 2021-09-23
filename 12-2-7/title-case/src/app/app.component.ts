import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div>v12.2.7</div>
      <p>{{ '1st 2nd 3rd' | titlecase }}</p>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'title-case';
}
