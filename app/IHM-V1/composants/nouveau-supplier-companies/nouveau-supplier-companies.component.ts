import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';

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
  isGasRetailer: boolean = false;
  isIndividualClient: boolean = false;
  latitudePlaceholder: string = '';
  longitudePlaceholder: string = '';

  map: L.Map;
  marker: L.Marker;

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
      email: ['', Validators.required],
      password: ['', Validators.required],
      imageFileName: [''],
      imageFile: [null, Validators.required],
      openingHours: [''],
      latitude: [''],
      longitude: [''],
      role: ['']
    });

    this.route.data.subscribe(data => {
      this.isSupplier = data['origin'] === 'supplier';
      this.isGasRetailer = data['origin'] === 'gasRetailer';
      this.isIndividualClient = data['origin'] === 'individualclient';
      this.toggleType(this.isSupplier, this.isGasRetailer, this.isIndividualClient);
    });

    this.initMap();
  }

  initMap() {
    this.map = L.map('map').setView([4.5709,12.3008], 6); // Centered on Douala, Cameroon

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      if (this.marker) {
        this.marker.setLatLng([lat, lng]);
      } else {
        this.marker = L.marker([lat, lng]).addTo(this.map);
      }

      // Mettre à jour les champs du formulaire avec le service de géocodage
      this.updateAddressFields(lat, lng);
    });
  }

  updateAddressFields(latitude: number, longitude: number) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    this.http.get<any>(url).subscribe( {
      next:(response) => {
        console.log('Réponse du service de géocodage:', response);
        this.form.patchValue({
          latitude: latitude,
          longitude: longitude,
          pays: response.address.country || ''
        });
      },
      error:(error) => {
        console.error('Erreur lors de l\'appel du service de géocodage:', error);
        // Gérer l'erreur ici, par exemple afficher un message à l'utilisateur
      }
    }

    );
  }

  openMap() {
    const mapContainer = document.getElementById('map-container');
    mapContainer!.style.display = 'block';
    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

  closeMap() {
    const mapContainer = document.getElementById('map-container');
    mapContainer!.style.display = 'none';
  }

  toggleType(isSupplier: boolean, isGasRetailer: boolean, isIndividualClient: boolean) {
    this.isSupplier = isSupplier;
    this.isGasRetailer = isGasRetailer;
    this.isIndividualClient = isIndividualClient;

    if (this.isSupplier || this.isGasRetailer || this.isIndividualClient) {
      this.form.get('firstName')?.setValidators(Validators.required);
      this.form.get('lastName')?.setValidators(Validators.required);
      if (this.isGasRetailer) {
        this.form.get('openingHours')?.setValidators(Validators.required);
      }
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
      latitude: this.form.get('latitude')?.value,
      longitude: this.form.get('longitude')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
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
    } else if (this.isGasRetailer) {
      formData.append('gasRetailerDTO', JSON.stringify(dto));
      console.log('FormData pour Gas Retailer:', formData);
      this.http.post('http://localhost:8082/gestionUtilisateurs/v1/gasRetailer/create', formData)
        .subscribe({
          next: response => {
            console.log('Réponse reçue:', response);
            this.router.navigate(['/dashboard/gasRetailers']);
          },
          error: error => {
            console.error('Erreur HTTP:', error);
          }
        });
    } else if (this.isIndividualClient) {
      formData.append('individualClientDTO', JSON.stringify(dto));
      console.log('FormData pour Individual Client:', formData);
      this.http.post('http://localhost:8082/gestionUtilisateurs/v1/individualClients/create', formData)
        .subscribe({
          next: response => {
            console.log('Réponse reçue:', response);
            this.router.navigate(['/dashboard/individualClients']);
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
