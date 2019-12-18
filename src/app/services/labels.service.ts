import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Label from '../models/label';

@Injectable()
export class LabelsService {

  constructor (private http: HttpClient) { }

  getLabels (): Observable<Label[]> {
    return this.http.get<Label[]>(`https://api.github.com/repos/hackregina/jobs/labels`);
  }

}
