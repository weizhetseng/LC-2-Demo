import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.page.html',
  styleUrls: ['./contract.page.scss'],
})
export class ContractPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  showserver() {

    this.navCtrl.navigateForward('home/contract/server');

  }
  showdownload() {

    this.navCtrl.navigateForward('home/contract/download');

  }

  showorder() {

    this.navCtrl.navigateForward('home/contract/order');

  }


}
