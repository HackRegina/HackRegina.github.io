import { Component, OnInit, ViewChild } from '@angular/core'
import { CalendarComponent } from 'ap-angular2-fullcalendar'
import { ContentfulService } from '../contentful.service'

import * as moment from 'moment'
import { Options } from 'fullcalendar'

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  calendarOptions: Options

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent

  constructor (private contentful: ContentfulService) {}

  ngOnInit () {
    this.contentful.getEvents().subscribe(res => {
      const events = res.map(event => ({
        title: event.fields.title,
        allDay: event.fields.allDay,
        start: event.fields.start,
        end: event.fields.end,
        url: event.fields.url
      }))

      this.calendarOptions = {
        editable: false,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: events,
        timezone: 'America/Regina'
      }
    })

  }

}
