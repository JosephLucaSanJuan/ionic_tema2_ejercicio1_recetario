import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaTortillaPage } from './receta-tortilla.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaTortillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaTortillaPageRoutingModule {}
