import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  navArray = [
    { path: 'home', title: 'Home', class: 'fa fa-home' },
    { path: 'about', title: 'About', class: 'fa fa-user' },
    { path: 'services', title: 'Services', class: 'fa fa-list' },
    { path: 'portfolio', title: 'Portfolio', class: 'fa fa-briefcase' },
    { path: 'contact', title: 'Contact', class: 'fa fa-comments' },
  ];
}
