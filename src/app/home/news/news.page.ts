import { Component, OnInit } from '@angular/core';
import { NEWS } from '../model/news.model';
import { newsdata } from '../mock/mock.news';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor() { }
  page :NEWS[] = newsdata
  selectNews?: NEWS

 


  ngOnInit() {

  }


}
