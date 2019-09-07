import { Specialists } from './../mockData';
import { Injectable } from '@angular/core';
import { Specialist } from '../models/specialist.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialistsService {

  specialists: any[] = Specialists;
  special: Specialist[];
  constructor() { }


  getSpecialists() {
    return this.specialists;
  }

  getSpecialistById(id: number) {
    return this.specialists.find(s => s.id === id);
  }

  getSpecialistByName(searchText: string): Specialist[] {
    return this.specialists.filter(s => {
      return s.name.toLowerCase().includes(searchText) || s.email.toLowerCase().includes(searchText) ||
            s.address.country.toLowerCase().includes(searchText);
    });
  }
}
