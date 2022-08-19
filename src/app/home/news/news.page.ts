import { Component, OnInit } from '@angular/core';
import { NEWS } from '../model/news.models';
import { newsdata } from '../mock/mock.news';
import { NewsService } from '../service/news.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  constructor(private navCtrl :NavController,
    private newServices : NewsService) { }

  ngOnInit() {
    
  }


  title = "最新消息";
  today: number = Date.now();
  // today配合 | date可以單獨拿出日期 date:'fullDate' 會加上星期、 date:'h:mm a z'加上時間
  selectNews? : NEWS;
  a = newsdata;
  onlineNews :NEWS[] = [];

  onSelect(news:NEWS):void{
    this.selectNews = news; 
  }
  showDetail(selectedNews : NEWS){
    this.navCtrl.navigateForward('home/news/news-detial/'+selectedNews.id);
  }

}
