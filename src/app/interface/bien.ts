import { Localite } from './localite';
import { Typebien } from './type';

export interface Bien {
    id: number,
    nombien: string,
    prix: number,
    description: string,
    etat: number,
    typebien: Typebien,
    localite: Localite,
    images: Blob,
}
