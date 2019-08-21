import { Specialists } from './../mockData';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialistsService {

  specialists: any[] = Specialists;

  constructor() { }


  getSpecialists(){
    return this.specialists;
  }

  getSpecialistById(id: number){
    return this.specialists.find(s => s.id === id)
  }
}
