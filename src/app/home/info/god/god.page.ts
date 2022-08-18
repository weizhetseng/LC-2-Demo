import { Component, OnInit } from '@angular/core';
import { godInfo, GODINFO } from '../../mock/godpage';
import Swiper, { SwiperOptions, Pagination } from 'swiper';

@Component({
  selector: 'app-god',
  templateUrl: './god.page.html',
  styleUrls: ['./god.page.scss'],
})
export class GodPage implements OnInit {

  pagedata: GODINFO[] = godInfo;

  public swiperConfig: SwiperOptions = {
    pagination: true,
  };


  constructor() { }

  ngOnInit() {
    Swiper.use([Pagination]);
  }

}
