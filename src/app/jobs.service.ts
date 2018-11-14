import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Job } from './job'
import * as moment from 'moment'

@Injectable()
export class JobsService {

  constructor (private http: HttpClient) { }

  getJobs (): Observable<Job[]> {
    let since = moment().subtract(3, 'months').format("YYYY-MM-DDTHH:MM:SSZ")
    return this.http.get<Job[]>(`https://api.github.com/repos/hackregina/jobs/issues?state=open&since=${since}`)
  }

  getJob (num): Observable<Job> {
    return this.http.get<Job>(`https://api.github.com/repos/hackregina/jobs/issues/${num}`)
  }

}
