import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from '../../services/supplier.service';
import { CompaniesDto } from '../../../gUsers-api/src/models';
import { ImagesService } from '../../../IHM-V1/services/Image-service';

@Component({
  selector: 'app-pages-companies',
  templateUrl: './pages-companies.component.html',
  styleUrls: ['./pages-companies.component.css']
})
export class PagesCompaniesComponent implements OnInit {

  listCompanies: Array<CompaniesDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private imagesService:ImagesService,
    private supplierService: SupplierService
  ) { }

  ngOnInit(): void {
    this.findAllCompanies();
  }

  findAllCompanies(): void {
    this.supplierService.findAllCompanies().subscribe(companies => {
      this.listCompanies = companies;
      this.listCompanies.forEach(companie =>{
        this.loadImage(companie);
      })
    });
  }


  loadImage(companies: CompaniesDto): void {
    if (companies.imageFileName) {
      this.imagesService.getImageUsers(companies.imageFileName).subscribe({
        next: (blob) => {
          const objectURL = URL.createObjectURL(blob);
          companies.imageUrl = objectURL;
        },
        error: (error) => {
          console.error('Erreur lors de la récupération de l\'image', error);
          companies.imageUrl = './assets/product.png'; // Image par défaut en cas d'erreur
        }
      });
    } else {
      companies.imageUrl = './assets/product.png'; // Image par défaut si pas de nom de fichier
    }
  }

  nouveauClientEtrep(): void {
    this.router.navigate(['dashboard/Companies/nouveauSupplierCompanies']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findAllCompanies();
    } else {
      this.errorMsg = event;
    }
  }

}
