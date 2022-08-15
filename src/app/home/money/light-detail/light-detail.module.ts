import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LightDetailPageRoutingModule } from './light-detail-routing.module';

import { LightDetailPage } from './light-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightDetailPageRoutingModule
  ],
  declarations: [LightDetailPage]
})
export class LightDetailPageModule {}
