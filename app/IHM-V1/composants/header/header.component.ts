import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Inject } from '@angular/core';
import { UsersDto } from '../../../gUsers-api/src/models/users-dto';
import { UserService } from '../../services/users-service';
import { Status } from '../../../gUsers-api/src/models/enums/statut';
import { Role } from '../../../gUsers-api/src/models/role';
import { ImagesService } from '../../services/Image-service';
import { Router } from '@angular/router';
import { SearchService } from '../../services/searchService';
import { CardService } from '../../../IHM-V1/composants/inter-entre-client/card/card-service';
import { LigneCommandeSupplierDto } from '../../../gCmmd-api/src/models/ligne-commande-supplier-dto';
import { ArticleDto } from '../../../gCmmd-api/src/models/article-dto';
import { ArticleService } from '../../services/articles-service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchQuery: string = '';
  articlesInCart: LigneCommandeSupplierDto[] = [];
  searchResults: ArticleDto[] = [];
  currentPage: number = 0;
  totalPages: number = 0;
  size: number = 8;
  totalItems: number = 0;
  dropdownVisible: boolean = false;

  articleId: number = 0; // Remplacez par votre logique pour obtenir l'ID
  gasRetailerId: number = 0; // Remplacez par votre logique pour obtenir l'ID


  @Output() searchEvent = new EventEmitter<string>();
  @ViewChild('fileInput') fileInput!: ElementRef;

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
    typeUtilisateur: '',
    latitude: 0,
    longitude: 0
  };
  selectedFile: File | null = null;
  imageUrl: string = 'favicon.ico';

  constructor(
    private spinner: NgxSpinnerService,
    private userService: UserService,
    private ImageService: ImagesService,
    private router: Router,
    private articleService: ArticleService,
    private searchService: SearchService,
    @Inject(CardService) private cardService: CardService
  ) {

  }

  ngOnInit(): void {
    const user = this.userService.getConnectedUser();
    if (user) {
      this.connectedUser = user;
      this.loadImage();
    }

    this.cardService.articlesInCart$.subscribe((articles) => {
      this.articlesInCart = articles;
    });

    this.spinner.show();


  }


  navigateToCard() {
    const currentRoute = this.router.url;
    if (currentRoute.includes('articleVueEntrep')) {
      this.router.navigate(['/dashboard/articleVueEntrep', this.articleId, 'card']);
    } else if (currentRoute.includes('clientVue')) {
      this.router.navigate(['/dashboard/clientVue', this.gasRetailerId, 'card']);
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
          this.imageUrl = 'favicon.ico';
        }
      });
    } else {
      this.imageUrl = 'favicon.ico';
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
      this.router.navigate(['/login']);
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
    }
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.searchService.searchArticles(this.searchQuery, this.currentPage, 8).subscribe(response => {
        this.searchResults = response.data;
        this.totalItems = response.totalItems;
        this.totalPages = response.totalPages;
        this.dropdownVisible = true;
      });
    } else {
      this.searchResults = [];
      this.dropdownVisible = false;
    }
  }

  searchArticles(page: number): void {
    this.searchService.searchArticles(this.searchQuery, page, this.size)
      .subscribe({
        next: response => {
          this.searchResults = response.data;
          this.totalItems = response.totalItems;
          this.totalPages = response.totalPages;
          this.currentPage = page;
          this.dropdownVisible = true;
        },
        error: error => {
          console.error('Erreur lors de la recherche:', error);
          this.searchResults = [];
          this.dropdownVisible = false;
        }
      });
  }

  loadPreviousPage(): void {
    if (this.currentPage > 0) {
      this.searchArticles(this.currentPage - 1);
    }
  }

  loadNextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.searchArticles(this.currentPage + 1);
    }
  }

  loadPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.searchArticles(page);
    }
  }

  onResultClick(result: ArticleDto): void {
    console.log('Selected article:', result);
   if(result.supplierId){

    this.router.navigateByUrl(`/dashboard/articleVueEntrep/${result.id}`).then(success => {

    });

   }else{

    this.router.navigateByUrl (`/dashboard/clientVue/${result.gasRetailerId}`).then(success => {

    });
    console.log(result.gasRetailerId);
   }

      this.closeDropdown();
  }


  closeDropdown(): void {
    this.dropdownVisible = false;
  }

  getImageUrl(imageFileName: string): string {
    return `http://localhost:8084/gestionCommande/v1/image/vue/${imageFileName}`;
  }

}
