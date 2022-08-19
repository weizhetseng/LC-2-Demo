
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-server-input',
  templateUrl: './server-input.page.html',
  styleUrls: ['./server-input.page.scss'],
})
export class ServerInputPage implements OnInit {


  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  showDetail() {

    this.navCtrl.navigateForward('home/contract/server/server-input/server-confirm');

    }


}
