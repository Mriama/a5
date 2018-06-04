import { Reservation } from './../../interface/reservation';
import { Component, OnInit ,Input} from '@angular/core';
import { BienService } from '../../service/bien.service';

@Component({
  selector: 'app-list-res',
  templateUrl: './list-res.component.html',
  styleUrls: ['./list-res.component.css']
})
export class ListResComponent implements OnInit {
  @Input()reser: Reservation;
 public reserve: Reservation[];
  constructor( private data:BienService ) { }

  ngOnInit() {
    this.data.getreservation().subscribe(result=>{this.reserve=result.data as Reservation[];
    })
  }

}
