import { Injectable } from '@angular/core'
import * as contentful from 'contentful'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/map'

@Injectable()
export class ContentfulService {

  private client

  constructor () {
    // Don't worry - these just give access to a read only query-able API - everything it has access to is public anyway
    this.client = contentful.createClient({
      space: 'yswja3mg62td',
      accessToken: '3f04660d6e548431504836bafa5f3bd655a3a4581ad72a1e5f6c952b48efe7d8'
    })
  }

  getSponsorshipLevels (): Observable<any> {
    return Observable.fromPromise(this.client.getEntries({'content_type': 'sponsorshipLevels'})).map(ContentfulService.mapToEntries)
  }

  getSponsors (): Observable<any> {
    return Observable.fromPromise(this.client.getEntries({'content_type': 'sponsors'})).map(ContentfulService.mapToEntries)
  }

  private static mapToEntries (response) {
    return response.items
  }

}
