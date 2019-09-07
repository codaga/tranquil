import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SpecialistsService } from './../services/specialists.service';
import { Specialist } from './../models/specialist.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  specialists: Specialist[];
  searchText: string;

  constructor(private specialistService: SpecialistsService) { }

  ngOnInit() {
  }

  nameSearch(searchText: string) {
    this.specialists = this.specialistService.getSpecialistByName(searchText);
  }

}
