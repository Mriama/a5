import { Client } from './../../interface/client';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BienService } from '../../service/bien.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form-connection',
  templateUrl: './form-connection.component.html',
  styleUrls: ['./form-connection.component.css']
})
export class FormConnectionComponent implements OnInit {
client:Client;
  constructor( private route:ActivatedRoute,private connect:BienService) { }

  ngOnInit() {
  }
onSubmit(formConect){
  const id=+this.route.snapshot.paramMap.get('id');
  this.client=formConect as Client;
  console.log(formConect);
  this.connect.connection(id,formConect).subscribe(res=>{
    console.log(res);
  })
}
}
