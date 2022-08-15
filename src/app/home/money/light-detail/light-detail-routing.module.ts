import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightDetailPage } from './light-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LightDetailPage
  },
  {
    path: 'pay-information',
    loadChildren: () => import('./pay-information/pay-information.module').then( m => m.PayInformationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LightDetailPageRoutingModule {}
