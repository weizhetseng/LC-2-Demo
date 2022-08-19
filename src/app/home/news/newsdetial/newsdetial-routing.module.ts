import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsdetialPage } from './newsdetial.page';

const routes: Routes = [
  {
    path: '',
    component: NewsdetialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsdetialPageRoutingModule {}
