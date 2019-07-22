import {Component, OnDestroy, OnInit} from '@angular/core';
import { JobsService } from '../jobs.service';
import {Job, Label} from '../job';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {JobSortType} from "../job-filter/job-filter.component";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit, OnDestroy {
  filteredJobs: Job[];
  jobSubscription: Subscription = Subscription.EMPTY;
  filterSubscription: Subscription = Subscription.EMPTY;

  labels: Label[] = [];

  jobFilterFormGroup: FormGroup;

  private jobs: Job[];

  constructor (private jobsService: JobsService,
               private router: Router,
               private formBuilder: FormBuilder) { }

  ngOnInit () {
    this.jobSubscription = this.jobsService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
      this.filteredJobs = jobs;
      this.labels = this.getAllUniqueLabels(jobs);
    });

    this.jobFilterFormGroup = this.createJobFilterFormGroup();
    this.jobFilterFormGroup.valueChanges.subscribe(() => {
      this.sortJobs(this.jobFilterFormGroup.get('sortBy').value);
      this.filterJobs();
    });
  }

  viewJob (job) {
    this.router.navigate(['/job', job.number]);
  }

  filterJobs() {
    const titleValue: string = this.jobFilterFormGroup.get("titleFilter").value || "";
    this.filteredJobs = this.jobs.filter(job => {
      return job.title.toLowerCase().indexOf(titleValue.toLowerCase()) >= 0;
    });

    const labelNames: string[] = this.jobFilterFormGroup.get("labelFilter").value.map(label => label.name);

    if(labelNames.length > 0) {
      this.filteredJobs = this.filteredJobs.filter(job => {
        let jobLabelNames: string[] = job.labels.map((label: Label)=> label.name);
        return jobLabelNames.filter(jobLabelName => labelNames.indexOf(jobLabelName) >= 0).length > 0;
      });
    }
  }

  private sortJobsByField(sortAsc: boolean, field: string) {
    this.jobs = this.jobs.sort((a: Job, b: Job) => {
      if(a[field] < b[field]) return sortAsc ? -1 : 1;
      else if(a[field] > b[field]) return sortAsc ? 1 : -1;
      return 0;
    });
  }

  sortJobs(sortBy: JobSortType) {
    switch (sortBy) {
      case JobSortType.TITLE_ASC:
        this.sortJobsByField(true, 'title');
        break;
      case JobSortType.TITLE_DESC:
        this.sortJobsByField(false, 'title');
        break;
      case JobSortType.CREATED_DATE_ASC:
        this.sortJobsByField(true, 'created_at');
        break;
      case JobSortType.CREATED_DATE_DESC:
        this.sortJobsByField(false, 'created_at');
        break;
    }
  }

  private getAllUniqueLabels(jobs: Job[]): Label[] {
    // flatten Label[][] to Label[]
    const labels: Label[] = [].concat.apply([],jobs.map(job => job.labels));
    // filter out duplicates
    return labels.filter((label,pos) => labels.indexOf(label) == pos);
  }

  private createJobFilterFormGroup(): FormGroup {
    return this.formBuilder.group({
      titleFilter: null,
      sortBy: null,
      labelFilter: [[]]
    });
  }

  ngOnDestroy() {
    this.jobSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
  }

}
