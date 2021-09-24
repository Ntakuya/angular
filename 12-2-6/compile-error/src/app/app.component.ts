import { Component } from '@angular/core';
import { SampleTwoModel } from './shared/sample-two-model';
import * as TEntity from './shared/sample-mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'compile-error';
  d: SampleTwoModel = new SampleTwoModel();
  c: TEntity.com.github.jdussouillez.bean.Entity<any> =
    new TEntity.com.github.jdussouillez.bean.Entity();
}
