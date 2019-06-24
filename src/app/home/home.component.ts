import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, LayerGroup, circle, featureGroup } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  options:any;

  ngOnInit() {
    this.options = {
      layers: [tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })],
      zoom: 7,
      center: latLng(46.879966, -121.726909)
    };
  }

  onMapReady(map: any) {
    const layerGrp = new LayerGroup([
      circle([ 46, -122 ], { radius: 5000 , color: 'red'}),
      circle([ 45.5, -121 ], { radius: 5000 , color: 'red'}),
      circle([ 45.5, -123 ], { radius: 5000 , color: 'red'}),
  ]);
  const group = featureGroup([layerGrp]);

    group.addTo(map);
    map.fitBounds(group.getBounds());
 }

}