import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

import { Sponsor } from "./sponsor";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SponsorsService {

  private apiUrl = "assets/json/sponsors.json";

  constructor(private http: HttpClient) { }

  find () {
    return this.http.get<Sponsor[]>(this.apiUrl + '', httpOptions)
      .pipe(catchError(this.handleError([])))
  }

  // TODO: ADD FOR API
  // findOne (id: string) {
  //   return this.http.get<any>(this.apiUrl + `/${id}`, httpOptions)
  //     .pipe(catchError(this.handleError([])))
  // }
  //
  // create (obj: any) {
  //   return this.http.post<any>(this.apiUrl + '', obj, httpOptions)
  //     .pipe(catchError(this.handleError([])))
  // }
  //
  // update (id: string, obj: any) {
  //   return this.http.put<any>(this.apiUrl + `/${id}`, obj, httpOptions)
  //     .pipe(catchError(this.handleError([])))
  // }
  //
  // destroy (id: string) {
  //   return this.http.delete<any>(this.apiUrl + `/${id}`, httpOptions)
  //     .pipe(catchError(this.handleError([])))
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
