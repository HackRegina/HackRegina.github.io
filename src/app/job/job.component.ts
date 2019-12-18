import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import Job from '../models/job';

import * as marked from 'marked';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  job: Job;
  body: any;

  constructor (private jobService: JobsService, private route: ActivatedRoute) { }

  ngOnInit () {
    this.route.params.subscribe(params => {
      const jobId = +params['jobId'];
      this.jobService.getJob(jobId).subscribe(job => {
        this.job = job;
        this.body = marked(this.job.body);
      });
    });
  }

}
