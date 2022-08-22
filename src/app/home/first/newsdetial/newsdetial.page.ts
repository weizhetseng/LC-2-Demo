import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NEWSDETIAL } from '../../model/news.detialmoedl';
import { NewsService } from '../../service/news.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-newsdetial',
  templateUrl: './newsdetial.page.html',
  styleUrls: ['./newsdetial.page.scss'],
})
export class NewsdetialPage implements OnInit {
  newses?: NEWSDETIAL;


  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private location: Location,
  ) { }

  ngOnInit() {
    const newsID = Number(this.route.snapshot.params.id);
   this.newses = this.newsService.getNews(newsID);
  }

  goBack(): void {
    this.location.back();
  }

}
