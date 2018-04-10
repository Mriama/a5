import { Bien } from './../interface/bien';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,ObservableInput} from 'rxjs/Observable';

@Injectable()
export class BienService {

  constructor( private http: HttpClient) { }
  bien = 'http://127.0.0.1:8000/bien';
    getAllBien():Observable<any>{
      return this.http.get(this.bien)
    };


   bbien=  "http://127.0.0.1:8000/bien";
   getBien(id: number):Observable<any>{
    return this.http.get(this.bbien+`/${id}`)
  };

}
  