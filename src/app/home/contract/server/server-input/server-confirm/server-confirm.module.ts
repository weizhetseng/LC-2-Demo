import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServerConfirmPageRoutingModule } from './server-confirm-routing.module';

import { ServerConfirmPage } from './server-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServerConfirmPageRoutingModule
  ],
  declarations: [ServerConfirmPage]
})
export class ServerConfirmPageModule {}
