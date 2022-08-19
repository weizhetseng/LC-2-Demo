import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { moneypage, MONEYPAGES } from '../mock/moneypage';
@Component({
  selector: 'app-money',
  templateUrl: './money.page.html',
  styleUrls: ['./money.page.scss'],
})
export class MoneyPage implements OnInit {

  pagedata: MONEYPAGES[] = moneypage;
  selectpage?: MONEYPAGES;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  showDetail(selectpage: MONEYPAGES): void {

    this.navCtrl.navigateForward('home/money/' + selectpage.type);

  }

}
