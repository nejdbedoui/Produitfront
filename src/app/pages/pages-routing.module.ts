import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ListeCommandeComponent } from '../liste-commande/liste-commande.component';



const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {path: 'dashboard',component: ECommerceComponent},
    {path: 'Commande',component: ListeCommandeComponent},

   
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
