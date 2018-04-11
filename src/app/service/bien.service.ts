import { Bien } from './../interface/bien';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,ObservableInput} from 'rxjs/Observable';
import { Localite } from './../interface/localite';
import { Typebien } from './../interface/type';

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

}
  