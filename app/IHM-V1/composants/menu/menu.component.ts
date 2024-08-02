import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('rotateChevron', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(90deg)' })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
      id: '0',
      titre: 'Tableau de bord',
      icon: 'fas fa-chart-line',
      url: '',
      sousMenu: [
        { id: '00', titre: 'map', icon: 'fa fa-globe', url: 'dashboard/map' },
        { id: '01', titre: 'Vue d\'ensemble', icon: 'fas fa-chart-pie', url: '' },
        { id: '02', titre: 'Statistiques', icon: 'fas fa-chart-bar', url: 'statistiques' }
      ]
    },
    {
      id: '1',
      titre: 'Interfaces',
      icon: 'fa-solid fa-shop',
      url: '',
      sousMenu: [
        { id: '11', titre: 'entrepriseVue', icon: 'fa-solid fa-shop', url: '/dashboard/vue_entreprise' },
        { id: '12', titre: 'artcleVueEntrep', icon: 'fa-solid fa-shop', url: '/dashboard/articleVueEntrep' },
        { id: '13', titre: 'vue-clients', icon: 'fa-solid fa-shop', url: '/dashboard/clientVue' }
      ]
    },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fas fa-boxes',
      url: '',
      sousMenu: [
        { id: '21', titre: 'articles', icon: 'fas fa-boxes', url: '/dashboard/articles' },
        { id: '22', titre: 'Mouvements du stock', icon: 'fab fa-stack-overflow', url: '/dashboard/mvtstk' }
      ]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        { id: '31', titre: 'Companies', icon: 'fas fa-users', url: '/dashboard/Companies' },
        { id: '32', titre: 'Commandes clients', icon: 'fas fa-shopping-basket', url: '/dashboard/commandesclient' }
      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        { id: '41', titre: 'Fournisseurs', icon: 'fas fa-users', url: '/dashboard/fournisseurs' },
        { id: '42', titre: 'Commandes fournisseurs', icon: 'fas fa-truck', url: 'commandesfournisseur' }
      ]
    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: 'fas fa-cogs',
      url: '',
      sousMenu: [
        { id: '51', titre: 'Categories', icon: 'fas fa-tools', url: 'categories' },
        { id: '52', titre: 'Utilisateurs', icon: 'fas fa-users-cog', url: 'utilisateurs' }
      ]
    }
  ];

  public collapsed: boolean = true;
  @Output() toggle = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigate(menu: Menu): void {
    if (menu.url) {
      this.router.navigate([menu.url]);
    }
  }

  toggleMenu(menu: Menu): void {
    menu.active = !menu.active;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.toggle.emit(this.collapsed); // Emit the toggle event
  }

  getChevronState(menu: Menu): string {
    return menu.active ? 'expanded' : 'collapsed';
  }
}
