import { Specialist } from './../models/specialist.model';
import { SpecialistsService } from './../services/specialists.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specialist-details',
  templateUrl: './specialist-details.component.html',
  styleUrls: ['./specialist-details.component.scss']
})
export class SpecialistDetailsComponent implements OnInit {

  specialist: Specialist;

  constructor(private route: ActivatedRoute, private specialistsService: SpecialistsService) { }

  ngOnInit() {
    const idRef = 'id';
    const id = +this.route.snapshot.params[idRef];
    this.specialist = this.specialistsService.getSpecialistById(id);
    this.route.params.subscribe(params => {
      this.specialist = this.specialistsService.getSpecialistById(+params[idRef]);
    });
  }

}
