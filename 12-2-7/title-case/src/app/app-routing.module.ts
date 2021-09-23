import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'n18i',
    loadChildren: () =>
      import('./ng18i-check/ng18i-check.module').then(
        (r) => r.Ng18iCheckModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
