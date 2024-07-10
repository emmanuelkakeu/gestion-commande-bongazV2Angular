import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { UsersDto } from '../../../gUsers-api/src/models/users-dto';
import { UserService } from '../../services/users-service';
import { Status } from '../../../gUsers-api/src/models/enums/statut';
import { Role } from '../../../gUsers-api/src/models/role';
import { Observable } from 'rxjs';
import { SupplierService } from '../../services/supplier.service';
import { ImagesService } from '../../services/Image-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  connectedUser: UsersDto = {
    id: 0,
    firstName: '',
    name: '',
    lastName: '',
    email: '',
    adresseDto: { adresse1: '', adresse2: '', ville: '', pays: '' },
    password: '',
    contactDetails: '',
    status: Status.DEACTIVER,
    dateCreated: new Date(),
    imageFileName: '',
    role: new Role(),
    typeUtilisateur: ''
  };
  selectedFile: File | null = null;
  imageUrl: string = 'favicon.ico';
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private userService: UserService,
    private ImageService:ImagesService,
    private router:Router) {}

  ngOnInit(): void {
    const user = this.userService.getConnectedUser();
    if (user) {
      this.connectedUser = user;
      this.loadImage();
    }
  }

  loadImage(): void {
    if (this.connectedUser.imageFileName) {
      this.ImageService.getImageUsers(this.connectedUser.imageFileName).subscribe({
        next: (blob) => {
          const objectURL = URL.createObjectURL(blob);
          this.imageUrl = objectURL;
        },
        error: (error) => {
          console.error('Erreur lors de la récupération de l\'image', error);
          this.imageUrl = 'favicon.ico'; // Image par défaut en cas d'erreur
        }
      });
    } else {
      this.imageUrl = 'favicon.ico'; // Image par défaut si pas de nom de fichier
    }
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.onSubmitImageUpdate();
      this.router.navigate(['/dashboard/login']);
    }
  }

  onSubmitImageUpdate(): void {
    if (this.selectedFile) {
      this.userService.uploadImage(this.selectedFile).subscribe({
        next: () => {
          this.loadImage();
          console.log('Image upload successful');
        },
        error: (error) => {
          console.error('Erreur lors du téléchargement de l\'image', error);
        }
      });
    } else {
      console.warn('No file selected');
    }
  }
}
