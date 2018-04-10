import { BienService } from './../../service/bien.service';
import { Bien } from './../../interface/bien';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  

  bienn:Bien[];
  constructor( private data: BienService, private Rout: ActivatedRoute, private detay: Location  ) { }

  ngOnInit() {
    const id=+this.Rout.snapshot.paramMap.get("id");
    this.data.getBien(id).subscribe(data=>{this.bienn=data.data as Bien[];
      console.log(this.bienn);
    })
    
  }
}
