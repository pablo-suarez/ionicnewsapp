import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from './../interfaces/newsinterfaz';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  news: Article[] = [];
  constructor(private storage: Storage) {
    this.loadfavs();
   }
  savenews(news:Article){
    const already_exists = this.news.find(exam_news => exam_news.title === news.title);
    if(!already_exists){
      this.news.unshift( news );
      this.storage.set('favorites', this.news);
    }

  }
  async loadfavs(){
    const favorites = await this.storage.get('favorites');
    if(favorites){
      this.news = favorites;
    }
    
  }
  deletenews(mynew:Article){
    this.news = this.news.filter(delnews => delnews.title !== mynew.title);
    this.storage.set('favorites', this.news);
  }
}
