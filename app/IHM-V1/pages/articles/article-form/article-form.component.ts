import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../../../services/articles-service';
import { ArticleDto } from '../../../../gCmmd-api/src/models/article-dto';
import { Router } from '@angular/router';
import { SupplierService } from '../../../services/supplier.service';
import { SupplierDto } from '../../../../gUsers-api/src/models/supplier-dto';
import { catchError, tap } from 'rxjs/operators';
import { GasRetailerDto } from '../../../../gUsers-api/src/models';
import { GasRetailerService } from '../../../services/gas-retailer.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit{

  articleForm: FormGroup;
  selectedFile: File | null = null;
  imageUrl: string = 'assets/product.png'; // chemin de votre image par défaut
  suppliers: SupplierDto[] = [];
  gasRetailers: GasRetailerDto[] = [];

  constructor(private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router,
    private supplierService:SupplierService,
    private gasRetailerService:GasRetailerService) {
    this.articleForm = this.fb.group({
      codeArticle: ['', Validators.required],
      nameArticle : ['', Validators.required],
      designation: ['', Validators.required],
      prixUnitaireHt: ['', Validators.required],
      tauxTva: ['', Validators.required],
      stockInit:[''],
      prixUnitaireTtc: [''],
      imageFileName: [''],
      supplierId: [null],
      gasRetailerId: [null]
    });
  }


  ngOnInit(): void {
    this.listSuppliers();
    this.listGasRetailer();
  }

  listSuppliers() {
    this.supplierService.findAllSupplier().pipe(
      tap(response => this.suppliers = response),
      catchError(error => {
        console.error('Erreur lors de la récupération des fournisseurs', error);
        return [];
      })
    ).subscribe(() => {

    });
  }
  listGasRetailer() {
    this.gasRetailerService.findAllRetailer().pipe(
      tap(response => this.gasRetailers = response),
      catchError(error => {
        console.error('Erreur lors de la récupération des detaillants de gaz', error);
        return [];
      })
    ).subscribe(() => {

    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Afficher l'image sélectionnée
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  triggerFileInput() {
    const fileInput = document.getElementById('imageFile') as HTMLInputElement;
    fileInput.click();
  }

  onSubmit(): void {
    if (this.articleForm.valid && this.selectedFile) {
      const article: ArticleDto = this.articleForm.value;
      console.log('Article:', article); // Vérifiez ici que nameArticle n'est pas null
      console.log('Selected File:', this.selectedFile); // Log the selected file

      this.articleService.createArticle(article, this.selectedFile).subscribe({
        next: (response: ArticleDto) => {
          console.log('Article created successfully', response);
          this.router.navigate(['dashboard/articles']);
        },
        error: (error: any) => {
          console.error('Error creating article', error);
        },
        complete: () => {
          console.log('Request completed');
        }
      });
    } else {
      console.log('Form is invalid or no file selected');
    }
  }
}
