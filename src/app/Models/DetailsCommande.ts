import { Produit } from "./Produit";

export class DetailsCommande{
    constructor(
        public id_details: string,
        public produit: Produit,
        public quantite: number,
    ){}
}