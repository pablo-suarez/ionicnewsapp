import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { MynewComponent } from './mynew/mynew.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    NewsComponent,
    MynewComponent],
    exports:[
      NewsComponent
    ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
