import { Component, OnInit } from '@angular/core';
import { CardService } from './card-service';
import { LigneCommandeSupplierDto } from '../../../../gCmmd-api/src/models/ligne-commande-supplier-dto';
import { Router } from '@angular/router';
import { SharedDataService } from '../../../services/Shared-data-service';
import { CommandeCompaniesDto } from '../../../../gCmmd-api/src/models/commande-companies-dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  articlesInCart: LigneCommandeSupplierDto[] = [];

  constructor(private cardService: CardService,
    private sharedDataService: SharedDataService,
    private router : Router) {}

  ngOnInit(): void {
    this.cardService.articlesInCart$.subscribe((articles) => {
      this.articlesInCart = articles;
    });
  }

  removeFromCart(article: LigneCommandeSupplierDto): void {
    this.cardService.removeFromCart(article);
  }

  createOrder(): void {

    const commande: CommandeCompaniesDto = {
      ligneCommandeCompaniesDto: this.articlesInCart,
      // Ajoutez d'autres champs nécessaires
    };

    this.cardService.createOrder().subscribe({
      next: (response) => {
        console.log('Order created successfully:', response);
       // this.cardService.clearCart();
       //this.sharedDataService.setCommande(response);

       this.router.navigate(['dashboard/finalisercommande']);
      },
      error: (error) => {
        console.error('Error creating order:', error);
      }
    });
  }
  

  calculateTotalPrice(): number {
    return this.cardService.calculateTotalPrice(this.articlesInCart);
  }

  incrementQuantity(article: LigneCommandeSupplierDto): void {
    this.cardService.incrementQuantity(article);
  }

  decrementQuantity(article: LigneCommandeSupplierDto): void {
    this.cardService.decrementQuantity(article);
  }

  updateQuantity(article: LigneCommandeSupplierDto): void {
    this.cardService.updateQuantity(article);
  }


}
