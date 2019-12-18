import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { Observable ,  from } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class ContentfulService {

  private client;

  constructor () {
    // Don't worry - these just give access to a read only query-able API - everything it has access to is public anyway
    this.client = contentful.createClient({
      space: 'yswja3mg62td',
      accessToken: '3f04660d6e548431504836bafa5f3bd655a3a4581ad72a1e5f6c952b48efe7d8'
    });
  }

  private static mapToEntries (response) {
    return response.items;
  }

  getSponsorshipLevels (): Observable<any> {
    return from(this.client.getEntries({'content_type': 'sponsorshipLevels'})).pipe(map(ContentfulService.mapToEntries));
  }

  getSponsors (): Observable<any> {
    return from(this.client.getEntries({'content_type': 'sponsors'})).pipe(map(ContentfulService.mapToEntries));
  }

  getPartners (): Observable<any> {
    return from(this.client.getEntries({'content_type': 'partners'})).pipe(map(ContentfulService.mapToEntries));
  }

  getEvents (): Observable<any> {
    return from(this.client.getEntries({'content_type': 'event'})).pipe(map(ContentfulService.mapToEntries));
  }

  getTeamMembers (): Observable<any> {
    return from(this.client.getEntries({'content_type': 'teamMember'})).pipe(map(ContentfulService.mapToEntries));
  }

}
