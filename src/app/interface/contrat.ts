import { Client } from './client';
import { Bien } from './bien';
export interface Contrat {
    id: number,
    datecontrat:Date,
    caution:number,
    duree:string,
    bien:Bien,
    client:Client
}
