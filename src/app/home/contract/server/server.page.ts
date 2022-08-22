import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { serverpage, SERVERPAGES } from '../../mock/serverpage';



@Component({
  selector: 'app-server',
  templateUrl: './server.page.html',
  styleUrls: ['./server.page.scss'],
})
export class ServerPage implements OnInit {

  pagedata: SERVERPAGES[] = serverpage;


  constructor(private navCtrl: NavController) { }



  showDetail() {
    this.navCtrl.navigateForward('home/contract/server/server-input');
    }

    ngOnInit() {
    }

}
