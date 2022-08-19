import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-server-confirm',
  templateUrl: './server-confirm.page.html',
  styleUrls: ['./server-confirm.page.scss'],
})
export class ServerConfirmPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  showDetail() {

    this.navCtrl.navigateForward('home/contract');

    }

}
