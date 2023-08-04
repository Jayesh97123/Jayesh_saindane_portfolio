import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ActualPortfolioComponent } from './components/actual-portfolio/actual-portfolio.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactsComponent,
    ActualPortfolioComponent,
  ],
  imports: [CommonModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
