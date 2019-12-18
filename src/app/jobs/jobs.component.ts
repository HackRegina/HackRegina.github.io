import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import Job from '../models/job';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LabelsService } from '../services/labels.service';
import Label from '../models/label';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  label = '';
  search = '';

  labels: Label[] = [];
  appliedLabels: Label[] = [];

  jobs: Job[] = [];
  filteredJobs: Job[] = [];

  jobsSubscription: Subscription = Subscription.EMPTY;
  labelsSubscription: Subscription = Subscription.EMPTY;
  appliedFilters: string[] = [];

  constructor(
    private jobsService: JobsService,
    private labelService: LabelsService,
    private router: Router
  ) {
    this.jobsSubscription = this.jobsService.getJobs().subscribe(jobs => this.jobs = this.filteredJobs = jobs);
    this.labelsSubscription = this.labelService.getLabels().subscribe(labels => this.labels = labels);
  }

  ngOnInit() {
    this.doFilter();
  }

  viewJob(job) {
    this.router.navigate(['/job', job.number]);
  }

  doFilter(): void {
    this.filteredJobs = this.jobs.filter(j => {
      return (
        ((j.title.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())) ||
        (j.body.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()))) &&
        (this.appliedLabels.length > 0 ? this.appliedLabels.every(al => j.labels.find(l => al.id === l.id)) : true)
      );
    });
  }

  getLabels(): Label[] {
    return this.labels.filter(l => !this.appliedLabels.includes(l));
  }

  onSelectLabel(labelName: string) {
    const label = this.labels.find(l => l.name === labelName);
    if (label) {
      this.appliedLabels.push(label);
    }
    this.label = '';
    this.doFilter();
  }

  onRemoveLabel(label: Label) {
    const index = this.appliedLabels.findIndex(l => l.id === label.id);
    this.appliedLabels.splice(index, 1);
    this.doFilter();
  }

}
