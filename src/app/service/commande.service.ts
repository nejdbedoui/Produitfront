import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from '../Models/Commande';
import { Produit } from '../Models/Produit';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  urlP: string;
  urlC: string;


  constructor(private _http: HttpClient) { 
    this.urlP = "http://localhost:8080/api/produit";
    this.urlC = "http://localhost:8080/api/commande";  }

    getallP(){
      return this._http.get<Produit[]>(`${this.urlP}/GetProduit`);
    }

    AddC(c){
      console.log(c);
      return this._http.post(`${this.urlC}/AddCommande`,c);
    }
    getAllC(){
      return this._http.get<Commande[]>(`${this.urlC}/GetCommande`);
    }
}
