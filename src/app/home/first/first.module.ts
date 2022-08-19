import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstPageRoutingModule } from './first-routing.module';

import { FirstPage } from './first.page';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstPageRoutingModule,
    SwiperModule
  ],
  declarations: [FirstPage]
})
export class FirstPageModule {}
