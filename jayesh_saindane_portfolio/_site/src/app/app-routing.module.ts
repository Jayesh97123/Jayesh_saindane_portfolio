import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
  },
  // { path: '', redirectTo: 'base', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
