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
  showDetail() {

    this.navCtrl.navigateForward('home/contract/server');

    }

}
