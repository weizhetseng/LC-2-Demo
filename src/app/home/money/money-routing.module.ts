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
  {
    path: 'draw',
    loadChildren: () => import('./draw/draw.module').then( m => m.DrawPageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./donate/donate.module').then( m => m.DonatePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneyPageRoutingModule {}
