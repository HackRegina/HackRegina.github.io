import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Job } from './job'

@Injectable()
export class JobsService {

  constructor (private http: HttpClient) { }

  getJobs (): Observable<Job[]> {
    return this.http.get<Job[]>(`https://api.github.com/repos/hackregina/jobs/issues?state=open`)
  }

  getJob (num): Observable<Job> {
    return this.http.get<Job>(`https://api.github.com/repos/hackregina/jobs/issues/${num}`)
  }

}
