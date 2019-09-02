import { Specialist } from './../models/specialist.model';
import { SpecialistsService } from './../services/specialists.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.scss']
})
export class SpecialistsComponent implements OnInit {

  constructor(private specialistService: SpecialistsService) { }

  specialists: Specialist[];
  searchText;

  ngOnInit() {
    this.specialists = this.specialistService.getSpecialists();
  }

}
