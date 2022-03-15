import { NgModule } from '@angular/core';
import { NbAccordionModule, NbAutocompleteModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbProgressBarModule, NbSelectModule, NbTabsetModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DatePipe, DecimalPipe } from '@angular/common';
import { ListeCommandeComponent } from '../liste-commande/liste-commande.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbHighlight, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    NbTreeGridModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    Ng2SmartTableModule,
    NbAutocompleteModule,
    FormsModule,
    NbAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    NbDatepickerModule

  ],
  declarations: [
    PagesComponent,ListeCommandeComponent
  ],
  providers: [
    DatePipe,
    DecimalPipe
  ],
})
export class PagesModule {
}
