import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})

export class InfoPage implements OnInit {





  constructor(private navCtrl: NavController) {

  }

  ngOnInit() {

  }

  showGod(): void {

    this.navCtrl.navigateForward('home/info/god');

  }
  showHistory(): void {

    this.navCtrl.navigateForward('home/info/history');

  }
  showActivity(): void {

    this.navCtrl.navigateForward('home/info/activity');

  }
  showTraffic(): void {

    this.navCtrl.navigateForward('home/info/traffic');

  }


}
