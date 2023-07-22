import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PortfolioComponent } from './portfolio.component';
import { ActualPortfolioComponent } from './components/actual-portfolio/actual-portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'portfolio', component: ActualPortfolioComponent },
      { path: 'contact', component: ContactsComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
  // { path: '', redirectTo: 'base', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'services', component: ServicesComponent },
  // { path: 'portfolio', component: ActualPortfolioComponent },
  // { path: 'contact', component: ContactsComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
