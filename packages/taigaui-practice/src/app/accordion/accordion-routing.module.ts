import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionListPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: AccordionListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionRoutingModule {}
