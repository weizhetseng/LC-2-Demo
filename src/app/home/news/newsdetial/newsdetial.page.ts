import { Component, OnInit } from '@angular/core';
import { NEWS } from '../../model/news.models';
import { NewsService } from '../../service/news.service';
import { Location } from '@angular/common'; 
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-newsdetial',
  templateUrl: './newsdetial.page.html',
  styleUrls: ['./newsdetial.page.scss'],
})
export class NewsdetialPage implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private newsService :NewsService,
    private location: Location ,
      ) { }
    
      ngOnInit() {
    const newsID = Number(this.route.snapshot.params.id);
    this.newses = this.newsService.getNews(newsID);
      }
    
      goBack(): void { 
        this.location.back(); 
      }


      newses? : NEWS;
}
