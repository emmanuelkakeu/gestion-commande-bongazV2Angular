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

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  articlesInCart: LigneCommandeSupplierDto[] = [];
  searchResults: ArticleDto[] = [];
  currentPage: number = 2;
  totalPages: number = 2;
  itemsPerPage: number = 8;

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
    private userService: UserService,
    private ImageService: ImagesService,
    private router: Router,
    private articleService: ArticleService,
    private searchService: SearchService,
    @Inject(CardService) private cardService: CardService
  ) {}

  ngOnInit(): void {
    const user = this.userService.getConnectedUser();
    if (user) {
      this.connectedUser = user;
      this.loadImage();
    }

    this.cardService.articlesInCart$.subscribe((articles) => {
      this.articlesInCart = articles;
    });

    // Watch for search query changes
    this.searchService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
      if (this.searchQuery) {
        this.searchArticles();
      } else {
        this.searchResults = [];
      }
    });
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
    }
  }

  onSearch(): void {
    console.log('Search query:', this.searchQuery);
    this.currentPage = 0;
    this.searchService.setSearchQuery(this.searchQuery);
    this.searchArticles();
  }



  searchArticles(): void {
    this.searchService.searchArticles(this.searchQuery, this.currentPage, this.itemsPerPage)
      .subscribe({
        next: response => {
          console.log('Search results:', response);
          this.searchResults = response.data || [];
          this.totalPages = Math.ceil(response.totalItems / this.itemsPerPage);
          console.log('Updated searchResults:', this.searchResults);
        },
        error: error => {
          console.error('Error searching articles:', error);
          this.searchResults = [];
        }
      });
  }








  loadNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.searchArticles();
    }
  }

  loadPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.searchArticles();
    }
  }

  onResultClick(result: ArticleDto): void {
    console.log('Selected article:', result);
    this.router.navigate(['/dashboard/articleDetail', result.id]);
  }

}
