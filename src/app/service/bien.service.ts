import { Bien } from './../interface/bien';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,ObservableInput} from 'rxjs/Observable';
import { Localite } from './../interface/localite';
import { Typebien } from './../interface/type'; 
import{ HttpHeaders } from '@angular/common/http';
import { Reservation} from '../interface/reservation';

const httpOptions = {
  headers: new HttpHeaders({
  'content-Type': 'application/json'
})
};
@Injectable()
export class BienService {

  constructor( private http: HttpClient) { }
  bien = 'http://127.0.0.1:8000/bien';
    getAllBien():Observable<any>{
      return this.http.get(this.bien)
    };

    localite = 'http://127.0.0.1:8000/localite';
    getlocalite():Observable<any>{
      return this.http.get<any>(this.localite)
    };

    type = 'http://127.0.0.1:8000/type';
    gettype():Observable<any>{
      return this.http.get<any>(this.type)
    };



   getBien(id: number):Observable<any>{
    return this.http.get(this.bien+`/${id}`)
  };
  
Reservation='http://127.0.0.1:8000/reservation';
addReserv(idBien,client):Observable<any>{
  return this.http.post(this.Reservation+`/${idBien}`,JSON.parse(JSON.stringify(client)),httpOptions)
}
connexion='http://127.0.0.1:8000/connexion';
connection(idbien,reserve:Reservation):Observable<any>{
  return this.http.post(this.connexion+`/${ idbien }`,JSON.parse(JSON.stringify(reserve)),httpOptions)

  }
  reservation = 'http://127.0.0.1:8000/Reservation';
  getreservation():Observable<any>{
    return this.http.get<any>(this.reservation)
  }
  reserv='http://127.0.0.1:8000/ReservationId';
  getUnReserv(id: number):Observable<any>{
    return this.http.get(this.reserv+`/${id}`)
  };
  Contrat='http://127.0.0.1:8000/saveContrat';
  addcontrat(idclient,contrat):Observable<any>{
  return this.http.post(this.Contrat+`/${idclient}`,JSON.parse(JSON.stringify(contrat)),httpOptions)
}
}