import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MONEYPAGES } from '../model/money.model';
import { moneypage } from '../mock/mock.money';


@Component({
  selector: 'app-money',
  templateUrl: './money.page.html',
  styleUrls: ['./money.page.scss'],
})
export class MoneyPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  pagedata : MONEYPAGES[] = moneypage
  selectpage? :MONEYPAGES;

  ngOnInit() {
  }

  showDetail(selectpage:MONEYPAGES):void{
    this.navCtrl.navigateForward('home/money/'+ selectpage.type);
  }


  
}
