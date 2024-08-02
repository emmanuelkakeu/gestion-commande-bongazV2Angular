import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public collapsed: boolean = true;

  onSidebarToggle(collapsed: boolean): void {
    this.collapsed = collapsed;
  }
}
