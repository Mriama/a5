import { Reservation } from './../../interface/reservation';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BienService } from '../../service/bien.service';
@Component({
  selector: 'app-onreserve',
  templateUrl: './onreserve.component.html',
  styleUrls: ['./onreserve.component.css']
})
export class OnreserveComponent implements OnInit {
public un: Reservation[];
  constructor( private data: BienService, private Rout: ActivatedRoute ) { }

  ngOnInit() {
    const id=+this.Rout.snapshot.paramMap.get("id");
    this.data.getUnReserv(id).subscribe(data=>{this.un=data.data as Reservation[];
      console.log(this.un);
    })
    
  }

}
