import {Bien} from './bien';
import {Client} from './client';

export interface Reservation {
      id:number;
      datereserv: Date;
      etat:boolean;
      client: Client;
      bien: Bien;


}
