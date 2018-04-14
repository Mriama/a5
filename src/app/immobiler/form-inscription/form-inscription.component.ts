import { Bien } from './../../interface/bien';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../interface/client';
import { ActivatedRoute } from '@angular/router';
import { BienService } from '../../service/bien.service';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css']
})
export class FormInscriptionComponent implements OnInit {
  connexion=true;
  client : Client;

  constructor(  
    private route: ActivatedRoute,
    private Reservation : BienService)

 {} 

  ngOnInit() {
  }
  send(reservForm){
    this.client = reservForm as Client;
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(this.client)
    this.Reservation.addReserv(id,this.client).subscribe(res=>{
      
    })
  }
  
}
