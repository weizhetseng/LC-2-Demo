import { Injectable } from '@angular/core';
import { NEWS } from '../model/news.model';
import { newsdata } from '../mock/mock.news';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

  newA : NEWS[] = newsdata
getNews(id:number) : NEWS {
  for (let i=0;i<this.newA.length;i++){
    if (this.newA[i].id === id){
  return this.newA[i]
    }
  }return null;
}





 
}
