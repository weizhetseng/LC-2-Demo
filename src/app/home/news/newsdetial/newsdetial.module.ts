import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsdetialPageRoutingModule } from './newsdetial-routing.module';

import { NewsdetialPage } from './newsdetial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsdetialPageRoutingModule
  ],
  declarations: [NewsdetialPage]
})
export class NewsdetialPageModule {}
