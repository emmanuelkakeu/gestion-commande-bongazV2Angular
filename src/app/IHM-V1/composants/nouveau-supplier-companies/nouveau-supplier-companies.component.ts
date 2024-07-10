import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nouveau-supplier-companies',
  templateUrl: './nouveau-supplier-companies.component.html',
  styleUrls: ['./nouveau-supplier-companies.component.css']
})
export class NouveauSupplierCompaniesComponent implements OnInit {
  selectedFile: File | null = null;
  imageUrl: string = 'assets/product.png';
  form: FormGroup;
  isSupplier: boolean = true;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      firstName: [''],
      lastName: [''],
      contactDetails: ['', Validators.required],
      adresse1: ['', Validators.required],
      adresse2: [''],
      ville: ['', Validators.required],
      pays: ['', Validators.required],
      imageFileName: [''],
      imageFile: [null, Validators.required],
      openingHours: ['']
    });

    this.route.data.subscribe(data => {
      this.isSupplier = data['origin'] === 'supplier';
      this.toggleType(this.isSupplier);
    });
  }

  toggleType(isSupplier: boolean) {
    this.isSupplier = isSupplier;
    if (this.isSupplier) {
      this.form.get('firstName')?.setValidators(Validators.required);
      this.form.get('lastName')?.setValidators(Validators.required);
      this.form.get('openingHours')?.clearValidators();
    } else {
      this.form.get('firstName')?.clearValidators();
      this.form.get('lastName')?.clearValidators();
      this.form.get('openingHours')?.setValidators(Validators.required);
    }
    this.form.get('firstName')?.updateValueAndValidity();
    this.form.get('lastName')?.updateValueAndValidity();
    this.form.get('openingHours')?.updateValueAndValidity();
  }

  triggerFileInput() {
    const fileInput = document.getElementById('imageFile') as HTMLInputElement;
    fileInput.click();
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

      console.log('Fichier sélectionné:', file);
    } else {
      console.error('Aucun fichier sélectionné');
    }
  }

  submit() {
    const formData = new FormData();

    // Ajout du fichier sélectionné
    if (this.selectedFile) {
      formData.append('imageFile', this.selectedFile);
      console.log('Image file ajouté au FormData:', this.selectedFile);
    } else {
      console.error('Aucun fichier sélectionné');
      return;
    }

    // Construction du DTO
    const dto = {
      name: this.form.get('name')?.value,
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      contactDetails: this.form.get('contactDetails')?.value,
      adresse1: this.form.get('adresse1')?.value,
      adresse2: this.form.get('adresse2')?.value,
      ville: this.form.get('ville')?.value,
      pays: this.form.get('pays')?.value,
      openingHours: this.form.get('openingHours')?.value,
      adresseDto: {
        adresse1: this.form.get('adresse1')?.value,
        adresse2: this.form.get('adresse2')?.value,
        ville: this.form.get('ville')?.value,
        pays: this.form.get('pays')?.value
      }
    };

    console.log('DTO construit:', dto);

    // Ajout du DTO sous le nom approprié
    if (this.isSupplier) {
      formData.append('supplierDTO', JSON.stringify(dto));
      console.log('FormData pour Supplier:', formData);
      this.http.post('http://localhost:8082/gestionUtilisateurs/v1/suppliers/create', formData)
        .subscribe({
          next: response => {
            console.log('Réponse reçue:', response);
            this.router.navigate(['/dashboard/fournisseurs']);
          },
          error: error => {
            console.error('Erreur HTTP:', error);
          }
        });
    } else {
      formData.append('companiesDto', JSON.stringify(dto));

      console.log('FormData pour Companies:', formData);
      this.http.post('http://localhost:8082/gestionUtilisateurs/v1/companies/create', formData)
        .subscribe({
          next: response => {
            console.log('Réponse reçue:', response);
            this.router.navigate(['/dashboard/Companies']);
          },
          error: error => {
            console.error('Erreur HTTP:', error);
          }
        });
    }
  }
}
