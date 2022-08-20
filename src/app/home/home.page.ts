import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DrawsPage } from './money/draws/draws.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}
  showdraw(selectpage: DrawsPage): void {
    this.navCtrl.navigateForward('home/money/draw');
    
  }

}
