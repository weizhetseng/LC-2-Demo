import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { lightdetail, LIGHTDETAIL } from '../../mock/lightdetail';

@Component({
  selector: 'app-light-detail',
  templateUrl: './light-detail.page.html',
  styleUrls: ['./light-detail.page.scss'],
})
export class LightDetailPage implements OnInit {

  pagedata: LIGHTDETAIL[] = lightdetail;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  showDetail() {

    this.navCtrl.navigateForward('home/money/light-detail/pay-information');

    }

}
