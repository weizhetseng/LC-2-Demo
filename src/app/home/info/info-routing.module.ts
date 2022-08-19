import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPage } from './info.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPage
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'traffic',
    loadChildren: () => import('./traffic/traffic.module').then( m => m.TrafficPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'god',
    loadChildren: () => import('./god/god.module').then( m => m.GodPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPageRoutingModule {}
