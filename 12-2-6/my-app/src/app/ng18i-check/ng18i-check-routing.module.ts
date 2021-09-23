import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempPageComponent } from './components/temp-page/temp-page.component';
import { Ng18iLayoutComponent } from './layouts/ng18i-layout/ng18i-layout.component';

const routes: Routes = [
  {
    path: '',
    component: Ng18iLayoutComponent,
    children: [
      {
        path: '',
        component: TempPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ng18iCheckRoutingModule {}
