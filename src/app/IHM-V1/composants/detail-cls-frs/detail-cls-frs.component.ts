import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SupplierDto } from '../../../gUsers-api/src/models/supplier-dto';
import { CompaniesDto } from '../../../gUsers-api/src/models/companies-dto';
import { SupplierService } from '../../services/supplier.service';
import { GasRetailerDto } from '../../../gUsers-api/src/models/gas-retailer-dto';

@Component({
  selector: 'app-detail-cls-frs',
  templateUrl: './detail-cls-frs.component.html',
  styleUrls: ['./detail-cls-frs.component.css']
})
export class DetailClsFrsComponent implements OnInit {

  @Input() origin: string = '';
  @Input() clientSupplier: SupplierDto | CompaniesDto | GasRetailerDto = {};
  @Output() suppressionResult = new EventEmitter();
  imageUrl: string = './assets/product.png';

  constructor(
    private router: Router,
    private supplierService:SupplierService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    if (this.clientSupplier.imageUrl) {
      this.imageUrl = this.clientSupplier.imageUrl;
    }
  }

  modifierClientFournisseur(): void {
    if (this.origin === 'companies') {
      this.router.navigate(['nouveauclient', this.clientSupplier.id]);
    } else if (this.origin === 'supplier') {
      this.router.navigate(['nouveaufournisseur', this.clientSupplier.id]);
    }
  }

  confirmerEtSupprimer(): void {
    const observer = {
      next: () => this.suppressionResult.emit('success'),
      error: (error: any) => this.suppressionResult.emit(error.error.error)
    };

    if (this.origin === 'companies') {
      this.supplierService.deleteCompanies(this.clientSupplier.id!).subscribe(observer);
    } else if (this.origin === 'supplier') {
      this.supplierService.deleteSupplier(this.clientSupplier.id!).subscribe(observer);
    }
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === 'Cross click') {
      return 'by pressing the cross button';
    } else {
      return `with: ${reason}`;
    }
  }

  isSupplier(clientSupplier: SupplierDto | CompaniesDto): clientSupplier is SupplierDto {
    return (clientSupplier as SupplierDto).firstName !== undefined;
  }
}
