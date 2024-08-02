import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { GasRetailerService } from '../../services/gas-retailer.service';

// Fonction pour créer un DivIcon avec une URL d'icône spécifique
function createCustomIcon(iconUrl: string): L.Icon {
  return L.icon({
    iconUrl: iconUrl,
    iconSize: [25, 41], // taille de l'icône
    iconAnchor: [12, 41], // point de l'icône qui sera utilisé comme point d'ancrage
    popupAnchor: [1, -34], // point d'ancrage du popup
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // URL de l'ombre du marqueur
    shadowSize: [41, 41], // taille de l'ombre
    shadowAnchor: [12, 41], // point d'ancrage de l'ombre
  });
}

@Component({
  selector: 'app-map',
  template:' <div id="map" style="height: 700px;"></div>',
  // styles: [
  //   .user-icon {
  //     background: url('/assets/user-icon.png') no-repeat center center;
  //     background-size: contain;
  //   }

  //   .retailer-icon {
  //     background: url('/assets/marker-shadow.png') no-repeat center center;
  //     background-size: contain;
  //   }
  // ]
})
export class MapComponent implements OnInit {

  constructor(private gasRetailerService: GasRetailerService) {}

  ngOnInit(): void {
    const camerounLat = 4.5709;
    const camerounLng = 12.3008;

    const map = L.map('map').setView([camerounLat, camerounLng], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => { // Spécifiez le type pour position
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          console.log('Latitude utilisateur:', userLat);
          console.log('Longitude utilisateur:', userLng);

          // Créez une icône pour l'utilisateur
          const userIcon = createCustomIcon('assets/iconUser.png'); // Utilisez l'URL ou le chemin relatif approprié
          const userMarker = L.marker([userLat, userLng], { icon: userIcon }).addTo(map)
            .bindPopup('Vous êtes ici')
            .openPopup();

          console.log('Marqueur utilisateur:', userMarker);

          // Récupérez les détaillants proches
          this.gasRetailerService.getNearbyRetailers(userLat, userLng).subscribe({
            next: (retailers: any) => {
              if (retailers.length > 0) {
                retailers.forEach((retailer: any) => {
                  console.log('Détaillant récupéré:', retailer); // Vérifiez les données dans la console
                  if (retailer.latitude && retailer.longitude) {
                    // Créez une icône pour les détaillants
                    const retailerIcon = createCustomIcon('assets/marker-icon.png'); // Utilisez l'URL ou le chemin relatif approprié
                    const retailerMarker = L.marker([retailer.latitude, retailer.longitude], { icon: retailerIcon }).addTo(map)
                      .bindPopup(retailer.name);
                    console.log('Marqueur détaillant:', retailerMarker);
                  } else {
                    console.warn('Coordonnées manquantes pour le détaillant:', retailer);
                  }
                });
              } else {
                console.warn('Aucun détaillant trouvé.');
              }
            },
            error: (error: any) => {
              console.error('Erreur lors de la récupération des détaillants:', error);
            },
            complete: () => {
              console.log('Flux terminé');
            }
          });
        },
        (error: GeolocationPositionError) => { // Spécifiez le type pour error
          console.error('Erreur lors de l\'obtention de la position:', error);
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error('L\'utilisateur a refusé la demande de géolocalisation.');
              break;
            case error.POSITION_UNAVAILABLE:
              console.error('Les informations de géolocalisation ne sont pas disponibles.');
              break;
            case error.TIMEOUT:
              console.error('La demande de géolocalisation a expiré.');
              break;
          }
        }
      );
    } else {
      console.error('La géolocalisation n\'est pas supportée par ce navigateur.');
    }
  }
}
