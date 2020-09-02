
import { Component, OnInit, Input } from '@angular/core';
import { Article } from './../../interfaces/newsinterfaz';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { LocalDataService } from './../../services/local-data.service';

@Component({
  selector: 'app-mynew',
  templateUrl: './mynew.component.html',
  styleUrls: ['./mynew.component.scss'],
})
export class MynewComponent implements OnInit {
  @Input() mynew: Article;
  @Input() index: number;
  @Input() nowFavs;
  constructor(private iab: InAppBrowser,
    private actSheet: ActionSheetController, 
    private socialSharing: SocialSharing,
    private dataLocalService:LocalDataService ) { }

  ngOnInit() {
    console.log('Favorites', this.nowFavs);
  }
  goWeb(){
    console.log('Noticia',this.mynew.url);
    const browser = this.iab.create(this.mynew.url, '_system');
  }
  async optmenu(){

let btnControl;
if(this.nowFavs){
  btnControl={
    text: 'Quitar de Favoritos',
    icon: 'trash',
    cssClass: 'action-dark',
    handler: () => {
      console.log('Borrado');
      this.dataLocalService.deletenews(this.mynew);
    }
  };
}else{
  btnControl={
    text: 'Agregar a Favoritos',
    icon: 'heart-outline',
    cssClass: 'action-dark',
    handler: () => {
      console.log('Agregado');
      this.dataLocalService.savenews(this.mynew);
    }
  }
}

    const actionSheet = await this.actSheet.create({
      
      cssClass: 'my-custom-class',
      buttons: [ {
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Compartido');
          this.socialSharing.share(
            this.mynew.title,
            this.mynew.source.name,
            '',
            this.mynew.url
          );
        }
      }, 
      
      btnControl,
      
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
