import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from '../../../../app/IHM-V1/services/supplier.service';
import { SupplierDto } from '../../../../app/gUsers-api/src/models/supplier-dto';
import { ImagesService } from '../../../../app/IHM-V1/services/Image-service';

@Component({
  selector: 'app-pages-supplier',
  templateUrl: './pages-supplier.component.html',
  styleUrls: ['./pages-supplier.component.css']
})
export class PagesSupplierComponent implements OnInit {

  listSuppliers: Array<SupplierDto> = [];
  errorMsg = '';
  imageUrl: string;

  constructor(
    private imagesService : ImagesService,
    private router: Router,
    private supplierService: SupplierService
  ) { }

  ngOnInit(): void {
    this.findAllSuppliers();
  }

  findAllSuppliers(): void {
    this.supplierService.findAllSupplier().subscribe(suppliers => {
      this.listSuppliers = suppliers;
      this.listSuppliers.forEach(supplier => {
        this.loadImage(supplier);
      });
    });
  }

  loadImage(supplier: SupplierDto): void {
    if (supplier.imageFileName) {
      this.imagesService.getImageUsers(supplier.imageFileName).subscribe({
        next: (blob) => {
          const objectURL = URL.createObjectURL(blob);
          supplier.imageUrl = objectURL;
        },
        error: (error) => {
          console.error('Erreur lors de la récupération de l\'image', error);
          supplier.imageUrl = './assets/product.png'; // Image par défaut en cas d'erreur
        }
      });
    } else {
      supplier.imageUrl = './assets/product.png'; // Image par défaut si pas de nom de fichier
    }
  }

  nouveauFournisseur(): void {
    this.router.navigate(['dashboard/fournisseurs/nouveauSupplierCompanies']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findAllSuppliers();
    } else {
      this.errorMsg = event;
    }
  }
}
