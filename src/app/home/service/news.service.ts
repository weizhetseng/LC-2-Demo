import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable, of } from 'rxjs';
import { NEWSDETIAL } from '../model/news.detialmoedl';
import { newsdetials } from '../mock/mock.newsdetial';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsA: NEWSDETIAL[] = newsdetials;
  constructor() { }

  getNews(id: number): NEWSDETIAL {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this.newsA.length; i++) {
      if (this.newsA[i].id === id) {
        return this.newsA[i];
      }
    } return null;
  }



}
