import { Reservation } from './../../interface/reservation';
import { Bien } from './../../interface/bien';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { BienService } from '../../service/bien.service';
import { Contrat } from './../../interface/contrat';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  @Input()reser: Reservation;
  public un: Reservation[];
 public contrat: Contrat;
  constructor(
    private route: ActivatedRoute,
    private contra : BienService  ) { }

  ngOnInit() {
    const id=+this.route.snapshot.paramMap.get("id");
    this.contra.getUnReserv(id).subscribe(data=>{this.un=data.data as Reservation[];
      console.log(this.un);
    })   
  }
  send(reservForm){
    this.contrat = reservForm as Contrat;
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(this.contrat)
    this.contra.addcontrat(id,this.contrat).subscribe(res=>{
      
    })
  }

}
