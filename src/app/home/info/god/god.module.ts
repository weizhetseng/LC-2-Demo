import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GodPageRoutingModule } from './god-routing.module';

import { GodPage } from './god.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GodPageRoutingModule,
    SwiperModule
  ],
  declarations: [GodPage]
})
export class GodPageModule {}
