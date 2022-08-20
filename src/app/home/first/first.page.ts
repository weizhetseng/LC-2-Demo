import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';
import { HomeBanners } from '../model/newshome.model';
import { bannerpic } from '../mock/mock.homeBanner';



@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {
  public swiperConfig: SwiperOptions = {
    pagination: true,
  };

  bannerimgs: HomeBanners[] = bannerpic;

  constructor() { }

  ngOnInit() {
    Swiper.use([Pagination]);
  }






}
