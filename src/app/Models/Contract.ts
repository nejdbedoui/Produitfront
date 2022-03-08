export class Contract{
    constructor(
        public id_contract: string,
        public id_client: string,
        public id_companie: string,
        public id_ad: string,
        public loop:number,
        public days:number,
        public start_date:Date,
        public end_date:Date,
    ){}
}