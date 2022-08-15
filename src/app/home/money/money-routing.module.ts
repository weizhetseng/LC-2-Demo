import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoneyPage } from './money.page';

const routes: Routes = [
  {
    path: '',
    component: MoneyPage
  },
  {
    path: 'light-detail',
    loadChildren: () => import('./light-detail/light-detail.module').then(m => m.LightDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneyPageRoutingModule {}
