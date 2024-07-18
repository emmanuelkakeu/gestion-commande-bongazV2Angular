// list-gas-retailer.component.ts
import { Component, OnInit } from '@angular/core';
import { GasRetailerService } from '../../services/gas-retailer.service';
import { GasRetailerDto } from '../../../gUsers-api/src/models';
import { ImagesService } from '../../services/Image-service';

@Component({
  selector: 'app-list-gas-retailer',
  templateUrl: './list-gas-retailer.component.html',
  styleUrls: ['./list-gas-retailer.component.css']
})
export class ListGasRetailerComponent implements OnInit {
  gasRetailers: GasRetailerDto[] = [];
  filteredGasRetailers: GasRetailerDto[] = [];

  constructor(private gasRetailerService: GasRetailerService,
    private imagesService:ImagesService) {}

  ngOnInit(): void {
    this.listGasRetailers();
  }

  listGasRetailers() {
    this.gasRetailerService.findAllRetailer().subscribe({
      next: (response) =>{ this.gasRetailers = response;

      },
      error: (error) => console.error('Erreur lors de la récupération des détaillants de gaz', error)
    });
  }

  getImageUrl(imageFileName: string): string {
    const baseUrl = 'http://localhost:8082/api/images/vue';
    return `${baseUrl}/${imageFileName}`;
  }

  deleteGasRetailer(id: number) {
    this.gasRetailerService.deleteRetailer(id).subscribe({
      next: () => {
        console.log('Détaillant de gaz supprimé');
        this.listGasRetailers();
      },
      error: (error) => console.error('Erreur lors de la suppression du détaillant de gaz', error)
    });
  }
}
