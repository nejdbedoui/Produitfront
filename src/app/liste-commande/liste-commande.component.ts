import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit, PipeTransform, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Commande } from '../Models/Commande';
import { DetailsCommande } from '../Models/DetailsCommande';
import { Produit } from '../Models/Produit';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'ngx-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.scss']
})
export class ListeCommandeComponent implements OnInit {
  commandes$: Observable<Commande[]>;
  ffilter = new FormControl('');

  options: string[];
  filteredOptions$: Observable<string[]>;
  public DetailsCommande:Array<DetailsCommande> = [];


  public commande:Commande;
  public commandes:Commande[];


  @ViewChild('autoInput') input;
  active: boolean;
  expanded: boolean;



  
  constructor( private Cservice: CommandeService, private pipe: DecimalPipe) {
    this.commande = new Commande(null,new Date(),this.DetailsCommande,null,null,null);
   }

  ngOnInit(): void {
    this.getAllP();
    this.filteredOptions$ = of(this.options);
    this.dynamic('add');
    this.getAllC();

  }

  getAllP(){
this.Cservice.getallP().subscribe(value=>{
  this.options = value.map(p=>p.nomProduit);
})
  }
   filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
  }

  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilteredOptions($event);
  }
  dynamic(action){
    if (action == 'add'){
    this.commande.liste_p.push(new DetailsCommande(null,new Produit(null,''),null));
    }
    else{
      this.commande.liste_p.pop();
    }
  }
  
  getAllC(){
    this.Cservice.getAllC().subscribe(value=>{
      this.commandes=value;

      this.commandes$ = this.ffilter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text, this.pipe))
      );
  
    })
  }

  Add(){
    this.active=!this.active;
    console.log(this.commandes)
  }

  onSubmit(){
    this.Cservice.AddC(this.commande).subscribe();
  }
  expand(){
    this.expanded=!this.expanded;
  }

   search(text: string, pipe: PipeTransform): Commande[] {
    return this.commandes.filter(country => {
      const term = text.toLowerCase();
      return country.type.toLowerCase().includes(term);
    });
  }
}

