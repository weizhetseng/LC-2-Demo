import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-server',
  templateUrl: './server.page.html',
  styleUrls: ['./server.page.scss'],
})
export class ServerPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  showDetail() {

    this.navCtrl.navigateForward('home/contract/server/server-input');

    }

}
