import { Component, OnInit } from '@angular/core';
import { GasRetailerService } from '../../services/gas-retailer.service';
import { GasRetailerDto } from '../../../gUsers-api/src/models';
import { SearchService } from '../../services/searchService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-gas-retailer',
  templateUrl: './list-gas-retailer.component.html',
  styleUrls: ['./list-gas-retailer.component.css']
})
export class ListGasRetailerComponent implements OnInit {
  gasRetailers: GasRetailerDto[] = [];
  filteredGasRetailers: GasRetailerDto[] = [];
  searchSubscription: Subscription;

  constructor(private gasRetailerService: GasRetailerService,
    private searchService: SearchService) {}



  ngOnInit(): void {
    this.listGasRetailers();
    this.searchSubscription = this.searchService.searchQuery$.subscribe(query => {
      this.onSearch(query);
    });
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  onSearch(query: string): void {
    if (!query) {
      this.filteredGasRetailers = [...this.gasRetailers];
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const matchingRetailers = this.gasRetailers.filter(retailer =>
      retailer.adresseDto?.ville?.toLowerCase().includes(lowerCaseQuery) ||
      retailer.adresseDto?.adresse1?.toLowerCase().includes(lowerCaseQuery)
    );

    const nonMatchingRetailers = this.gasRetailers.filter(retailer =>
      !retailer.adresseDto?.ville?.toLowerCase().includes(lowerCaseQuery) &&
      !retailer.adresseDto?.adresse1?.toLowerCase().includes(lowerCaseQuery)
    );

    this.filteredGasRetailers = [...matchingRetailers, ...nonMatchingRetailers];
  }

  listGasRetailers() {
    this.gasRetailerService.findAllRetailer().subscribe({
      next: (response) => {
        this.gasRetailers = response;
        this.filteredGasRetailers = [...this.gasRetailers]; // Initialize filtered list
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
        this.listGasRetailers(); // Refresh the list after deletion
      },
      error: (error) => console.error('Erreur lors de la suppression du détaillant de gaz', error)
    });
  }
}
