import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng18iCheckRoutingModule } from './ng18i-check-routing.module';
import { TempPageComponent } from './components/temp-page/temp-page.component';
import { Ng18iLayoutComponent } from './layouts/ng18i-layout/ng18i-layout.component';


@NgModule({
  declarations: [
    TempPageComponent,
    Ng18iLayoutComponent
  ],
  imports: [
    CommonModule,
    Ng18iCheckRoutingModule
  ]
})
export class Ng18iCheckModule { }
