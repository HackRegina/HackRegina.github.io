import { Component, OnInit, ViewChild } from '@angular/core'
import { ContentfulService } from '../contentful.service'
import * as moment from 'moment'

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  events: any[] = []

  constructor (private contentful: ContentfulService) {}

  ngOnInit () {
    this.contentful.getEvents().subscribe(res => {
    //   let res = [{}, {}, {}]
      this.events = res.map(event => ({
        title: event.fields.title,
        allDay: event.fields.allDay,
        start: event.fields.start,
        end: event.fields.end,
        url: event.fields.url
        // title: 'Test',
        // start:'2018-08-02T20:02:10.223Z',
        // end: '2018-08-02T22:02:10.223Z',
        // url: 'www.google.com'
      }))
    })
  }

}
