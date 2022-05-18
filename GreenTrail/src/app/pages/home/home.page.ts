import { Component ,OnInit} from '@angular/core';

declare let google;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  map: null;


  constructor() {
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map');
    const myLatLng = {lat: 42.3506978, lng: 13.3999338};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }

  ngOnInit(){
    this;
  }
}
