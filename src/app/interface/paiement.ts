import { Contrat } from './contrat';

export interface Paiement {
    id: number,
    datepaiement:string,
    montant:number,
    periode:string,
    contrat:Contrat
}
