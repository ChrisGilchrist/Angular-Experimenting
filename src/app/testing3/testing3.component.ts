import { environment } from '../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-testing3',
  templateUrl: './testing3.component.html',
  styleUrls: ['./testing3.component.scss']
})

export class Testing3Component implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 50.3673661;
  lng = -4.1251351;
  zoom = 12
  marker: any;
  constructor() { }

  ngOnInit() {
    
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      style: this.style,
      container: 'map',
      center: [this.lng, this.lat],
      zoom: this.zoom
    });

    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );

    const popup = new mapboxgl.Popup({ className: 'popup' }).setText('This is a test marker');
    new mapboxgl.Marker().setLngLat([this.lng, this.lat]).addTo(this.map).setPopup(popup);

    this.marker = new mapboxgl.Marker().setLngLat([this.lng, 53]).addTo(this.map).setPopup(popup);
  }

}

