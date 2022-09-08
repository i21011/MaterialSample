import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project, ProjektService } from '../projekt.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
projekt !: Project;
subscribtion !: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private projektService: ProjektService) { }

  ngOnInit(): void {
    this.subscribtion = this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.projekt = this.projektService.loadProjekt()[id];
    });
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}
