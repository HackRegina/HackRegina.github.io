import { Component, OnInit } from '@angular/core'
import { JobsService } from '../jobs.service'
import { Job } from '../job'

import * as marked from 'marked'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  job: Job
  body

  constructor (private jobService: JobsService, private route: ActivatedRoute) { }

  ngOnInit () {
    this.route.params.subscribe(params => {
      let jobId = +params['jobId'] // (+) converts string 'id' to a number
      this.jobService.getJob(jobId).subscribe(job => {
        this.job = job
        this.body = marked(this.job.body)
      })
    })
  }

}
