import { Bien } from './interface/bien';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rechercher'
})
export class RechercherPipe implements PipeTransform {

  transform(allbien: Bien[], args: string, id:number): Bien[] {
    if(args==="Typebien"){
      return allbien.filter(bien=>bien.typebien.id==id);
    }

    if(args==="Localite"){
      return allbien.filter(bien=>bien.localite.id==id);
    }
    
    return allbien;
  }

}
