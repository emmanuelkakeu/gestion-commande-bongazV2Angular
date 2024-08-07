import { Component, OnInit } from '@angular/core';
import { CommandeCompaniesFinalService } from '../../../services/commande-companies-final';
import { AdresseLivraison, CommandeCompaniesDto, CommandeCompaniesFinalDto, InfosCompaniesClient } from '../../../../gCmmd-api/src/models/commande-companies-final';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../../../services/Shared-data-service';
import { CardService } from '../../../composants/inter-entre-client/card/card-service';


@Component({
  selector: 'app-commande-companies-final-form',
  templateUrl: './commande-companies-final-form.component.html',
  styleUrls: ['./commande-companies-final-form.component.css']
})
export class CommandeCompaniesFinalFormComponent implements OnInit {
  commande: CommandeCompaniesFinalDto = new CommandeCompaniesFinalDto();

  constructor(
    private commandeCompaniesService: CommandeCompaniesFinalService,
    private route: ActivatedRoute,
    private cardService: CardService,
    private router: Router
  ) {
    this.commande.commandeCompaniesDto = new CommandeCompaniesDto();
    this.commande.commandeCompaniesDto.ligneCommandeCompaniesDto = [];
    this.commande.infosCompaniesClient = new InfosCompaniesClient();
    this.commande.adresseLivraison = new AdresseLivraison();
  }

  ngOnInit(): void {
    this.cardService.commande$.subscribe(commandeCompaniesDto => {

      console.log("received component",commandeCompaniesDto)
      if (commandeCompaniesDto) {
        this.commande.commandeCompaniesDto = commandeCompaniesDto;
      }
      
    });
  }

  createFinalCommande(): void {
    this.commandeCompaniesService.createCommande(this.commande).subscribe({
      next: (response) => {
        console.log('Final commande created successfully:', response);
        this.router.navigate(['/commande-companies-final-list']);
      },
      error: (error) => {
        console.error('Error creating final commande:', error);
      }
    });
  }
}
