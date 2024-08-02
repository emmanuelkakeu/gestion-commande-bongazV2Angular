import { Component, OnInit } from '@angular/core';
import { CardService } from './card-service';
import { LigneCommandeSupplierDto } from '../../../../gCmmd-api/src/models/ligne-commande-supplier-dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  articlesInCart: LigneCommandeSupplierDto[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.articlesInCart$.subscribe((articles) => {
      this.articlesInCart = articles;
    });
  }

  removeFromCart(article: LigneCommandeSupplierDto): void {
    this.cardService.removeFromCart(article);
  }

  createOrder(): void {
    this.cardService.createOrder().subscribe({
      next: (response) => {
        console.log('Order created successfully:', response);
        this.cardService.clearCart();
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
