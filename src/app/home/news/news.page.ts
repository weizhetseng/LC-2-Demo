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

  getNews(id:number) : NEWS {
    for (let i=0;i<this.page.length;i++){
      if (this.page[i].id === id){
    return this.page[i]
      }
    }return null;
      }
      onSelect(news:NEWS):void{
        this.selectNews = news; 
      }



  ngOnInit() {
    this.getNews();
  }

  getNews() :void{
    this.newServices.getonlineNews().subscribe(onlineNews => this.onlineNews = onlineNews);
  }
}
