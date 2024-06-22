import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';
import { SupplierDto } from '../../../gUsers-api/src/models/supplier-dto';
import { ImagesService } from '../../services/Image-service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-inter-entre-client',
  templateUrl: './inter-entre-client.component.html',
  styleUrls: ['./inter-entre-client.component.css']
})
export class InterEntreClientComponent implements OnInit {
  @Input() supplierDto: SupplierDto = {
    imageUrl: ''
  };
  @Output() suppressionResult = new EventEmitter();
  suppliers: SupplierDto[] = [];

  constructor(
    private supplierService: SupplierService,
    private router: Router,
    private imagesService: ImagesService
  ) {}

  ngOnInit(): void {
    this.listSuppliers();
  }

  listSuppliers() {
    this.supplierService.findAll().pipe(
      tap(response => this.suppliers = response),
      catchError(error => {
        console.error('Erreur lors de la récupération des fournisseurs', error);
        return [];
      })
    ).subscribe(() => {
      this.loadImagesForSuppliers();
    });
  }

  loadImagesForSuppliers() {
    this.suppliers.forEach(supplier => {
      if (supplier.imageFileName) {
        this.imagesService.getImageUsers(supplier.imageFileName).subscribe({
          next: (blob) => {
            const objectURL = URL.createObjectURL(blob);
            supplier.imageUrl = objectURL; // Met à jour l'URL de l'image pour chaque fournisseur
          },
          error: (error) => {
            console.error(`Erreur lors de la récupération de l'image ${supplier.imageFileName}`, error);
            supplier.imageUrl = './assets/product.png'; // Image par défaut en cas d'erreur
          }
        });
      } else {
        supplier.imageUrl = './assets/product.png'; // Image par défaut si pas de nom de fichier
      }
    });
  }

  getSupplier(id: number) {
    this.supplierService.findById(id).subscribe({
      next: (response: SupplierDto) => {
        console.log('Détails du fournisseur:', response);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du fournisseur:', err);
      },
      complete: () => {
        console.log('Récupération du fournisseur terminée');
      }
    });
  }

  deleteSupplier(id: number) {
    this.supplierService.delete(id).subscribe({
      next: () => {
        console.log('Fournisseur supprimé');
      },
      error: (err) => {
        console.error('Erreur lors de la suppression du fournisseur:', err);
      },
      complete: () => {
        console.log('Suppression du fournisseur terminée');
      }
    });
  }
}