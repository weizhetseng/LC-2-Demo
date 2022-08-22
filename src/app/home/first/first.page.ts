import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
import { NEWSDETIAL } from '../model/news.detialmoedl';
import { newsdetials } from '../mock/mock.newsdetial';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {
  public swiperConfig: SwiperOptions = {
    pagination: true,
  };


  detialmessage:NEWSDETIAL[]=newsdetials;  //a



  constructor(private navCtrl :NavController,
    ) { }

  ngOnInit() {
    Swiper.use([Pagination]);
  }


  showDetail(selectedNews : NEWSDETIAL){
    console.log("0000")
    this.navCtrl.navigateForward('home/first/newsdetial/'+selectedNews.id);
  }




}
