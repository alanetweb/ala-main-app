import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlawebinarsPage } from './alawebinars.page';

const routes: Routes = [
  {
    path: '',
    component: AlawebinarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlawebinarsPageRoutingModule {}
