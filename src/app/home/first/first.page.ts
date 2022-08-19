import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Pagination } from 'swiper';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {
  public swiperConfig: SwiperOptions = {
    pagination: true,
  };
  constructor() { }

  ngOnInit() {
    Swiper.use([Pagination]);
  }

}
