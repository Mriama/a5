import { BienService } from './../../service/bien.service';
import { Bien } from './../../interface/bien';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-afficheur',
  templateUrl: './afficheur.component.html',
  styleUrls: ['./afficheur.component.css']
})
export class AfficheurComponent implements OnInit {
  p: number = 1;
  biens:Bien[];
  constructor( private data: BienService ) { }

  ngOnInit() {
    this.data.getAllBien().subscribe(result=>{this.biens=result.data as Bien[];
    })
    
  }

}
