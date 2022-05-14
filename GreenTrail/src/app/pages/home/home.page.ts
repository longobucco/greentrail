import { Component } from '@angular/core';
import{ViewChild,ElementRef} from '@angular/core';
declare let google: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: any;
  @ViewChild('map',{read:ElementRef,static: false})mapRef: ElementRef;

  constructor() {}
  ionViewDidEnter(){
    this.vediMappa();
  }
  vediMappa(){
    const location =new google.maps.LatLng(	42.366 ,13.3944);
    const posizione= {
      center:location,
      zoom:15,
      disableDefaultUI:true
    };
    this.map=new google.maps.Map(this.mapRef.nativeElement);
  }
}
