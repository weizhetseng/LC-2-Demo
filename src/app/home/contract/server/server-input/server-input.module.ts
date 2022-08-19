import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServerInputPageRoutingModule } from './server-input-routing.module';

import { ServerInputPage } from './server-input.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServerInputPageRoutingModule
  ],
  declarations: [ServerInputPage]
})
export class ServerInputPageModule {}
