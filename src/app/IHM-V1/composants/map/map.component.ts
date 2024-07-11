import { Component, OnInit } from '@angular/core';
import * as L from '../leaflet';
import { GasRetailerService } from '../../services/gas-retailer.service';

@Component({
  selector: 'app-map',
  template: `<div id="map" style="height: 500px;"></div>`,
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private gasRetailerService: GasRetailerService) {}

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        const map = L.map('map').setView([userLat, userLng], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.marker([userLat, userLng]).addTo(map)
          .bindPopup('Vous êtes ici')
          .openPopup();

        this.gasRetailerService.getNearbyRetailers(userLat, userLng).subscribe((retailers: any) => {
          retailers.forEach((retailer: any) => {
            L.marker([retailer.latitude, retailer.longitude]).addTo(map)
              .bindPopup(retailer.name);
          });
        });
      });
    }
  }
}
