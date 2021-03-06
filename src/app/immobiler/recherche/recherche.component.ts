import { BienService } from './../../service/bien.service';
import { Bien } from './../../interface/bien';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Localite } from '../../interface/localite';
import { Typebien } from '../../interface/type';



@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  @Output()  dolar= new EventEmitter<any>();

  public localites: Localite[];
  public types: Typebien[];
  constructor(private service :BienService, private data: BienService) { }

  ngOnInit() {
    this.service.getlocalite().subscribe(data=>{this.localites=data.data as Localite[];

  });


  this.data.gettype().subscribe(data=>{this.types=data.data as Typebien[];

  });
}

search(id,select){
  this.dolar.emit({"id":id,"select":select})
}
}