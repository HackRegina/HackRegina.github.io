import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Job } from '../job';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobs: Job[];
  subscription: Subscription = Subscription.EMPTY;

  constructor (private jobsService: JobsService, private router: Router) { }

  ngOnInit () {
    this.subscription = this.jobsService.getJobs().subscribe(jobs => this.jobs = jobs);
  }

  viewJob (job) {
    this.router.navigate(['/job', job.number]);
  }

}
