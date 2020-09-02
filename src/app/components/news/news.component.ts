import { Component, OnInit, Input } from '@angular/core';
import { Article } from './../../interfaces/newsinterfaz';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() news: Article[] = [];
  @Input() nowFavs = false;
  constructor() { }

  ngOnInit() {}

}
