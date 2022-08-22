import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstPage } from './first.page';

const routes: Routes = [
  {
    path: '',
    component: FirstPage
  },
  {
    path: 'newsdetial/:id',
    loadChildren: () => 
    import('./newsdetial/newsdetial.module')
    .then( m => m.NewsdetialPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstPageRoutingModule {}
