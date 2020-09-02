

import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NewsService } from './../../services/news.service';
import { Article } from './../../interfaces/newsinterfaz';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  @ViewChild(IonSegment) segment: IonSegment;
  categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
 news: Article[] = [];
  constructor(private newsService: NewsService) {}
  ngOnInit(){
    //this.segment.value = this.categories[0];
    this.loadNews(this.categories[0]);
  }
  changeCategory(event){
    this.news = [];
    this.loadNews(event.detail.value);
  }
  loadNews(category: string, event?){
    //this.segment.value = category;
    this.newsService.getTopHeadCategory(category)
    .subscribe(resp => {
      console.log(resp);
      this.news.push(...resp.articles);
      if ( event ){
        event.target.complete();
      }
    });
  }
  loadData(event){
    this.loadNews(this.segment.value, event);
  }
}
