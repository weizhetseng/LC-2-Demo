import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'first',
        loadChildren: () => import('./first/first.module').then( m => m.FirstPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./contract/contract.module').then(m => m.ContractPageModule)
      },
      {
        path: 'money',
        loadChildren: () => import('./money/money.module').then(m => m.MoneyPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('./info/info.module').then(m => m.InfoPageModule)
      },
      {
        path: 'contract',
        loadChildren: () => import('./contract/contract.module').then(m => m.ContractPageModule)
      },
      {
        path: '',
        redirectTo: '/home/first',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/first',
    pathMatch: 'full'
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
