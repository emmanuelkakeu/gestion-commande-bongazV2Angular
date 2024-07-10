import { Component, OnInit } from '@angular/core';
import { CartService } from './card-service';
import { LigneCommandeSupplierDto } from '../../../../gCmmd-api/src/models/ligne-commande-supplier-dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  articlesInCart: LigneCommandeSupplierDto[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.articlesInCart$.subscribe((articles) => {
      this.articlesInCart = articles;
    });
  }

  removeFromCart(article: LigneCommandeSupplierDto): void {
    this.cartService.removeFromCart(article);
  }

  createOrder(supplierId: number): void {
    this.cartService.createOrder(supplierId).subscribe({
      next: (response) => {
        console.log('Order created successfully:', response);
        // Optionally, you can clear the cart or show a success message
       // this.cartService.clearCart();
      },
      error: (error) => {
        console.error('Error creating order:', error);
      }
    });
  }

  calculateTotalPrice(): number {
    return this.cartService.calculateTotalPrice(this.articlesInCart);
  }
}
