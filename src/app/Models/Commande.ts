import { DetailsCommande } from "./DetailsCommande";

export class Commande{
    constructor(
        public id_commande: string,
        public date:Date,
        public liste_p:DetailsCommande[],
        public statut: string,
        public type: string,
        public nom_fournisseur: string,
        public toggle=false
    ){}
}