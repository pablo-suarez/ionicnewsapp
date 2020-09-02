import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, enableProdMode } from '@angular/core';
import { RespTopHead } from '../interfaces/newsinterfaz';
import { environment } from 'src/environments/environment';

const api_key = environment.api_key;
const end_point = environment.endPoint;
//Obligadorio que X-Api-key vaya asi escrito
const headers = new HttpHeaders({
  'X-Api-key': api_key
});

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  headlipage = 0;
  currCategory = '';
  pageCategory = 0;
  constructor(private http: HttpClient) { }
// <T> Emite el mismo tipo de elemento que recibe
  private runQuery<T>(query: string){
    query = end_point + query;
    return this.http.get<T>(query, { headers });
  }

  getTopHeadLines(){
     this.headlipage++;
     return this.runQuery<RespTopHead>(`/top-headlines?country=us&page=${ this.headlipage }`);
  }
  getTopHeadCategory(category:string){
    if( this.currCategory === category){
      this.pageCategory++;
    }else{
      this.pageCategory = 1;
      this.currCategory = category;
    }
    return this.runQuery<RespTopHead>(`/top-headlines?country=us&category=${category}&page=${ this.pageCategory }`)
  }
}
