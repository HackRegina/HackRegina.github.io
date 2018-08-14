import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'moment-calendar',
  templateUrl: './moment-calendar.component.html',
  styleUrls: ['./moment-calendar.component.scss']
})
export class MomentCalendarComponent implements OnInit {

  current: any
  today: any
  viewBy: string = "M"
  calendar: any[] = []
  @Input() events:any[] = []

  constructor() {
    this.current = moment()
    this.today = moment()
  }

  ngOnInit() {
    this.current = moment()
    this.today = moment()
    this.drawMonthCalendar()
  }

  goToToday() {
    this.current = moment()
    this.drawMonthCalendar()
  }

  prev() {
    switch (this.viewBy) {
      case 'M':
        this.current = this.current.clone().subtract(1, 'months')
        this.drawMonthCalendar()
        break;
    }
  }

  next() {
    switch (this.viewBy) {
      case 'M':
        this.current = this.current.clone().add(1, 'months')
        this.drawMonthCalendar()
        break;
    }
  }

  drawMonthCalendar() {
    this.calendar = []
    const startDay = this.current.clone().startOf('month').startOf('week');
    const endDay = this.current.clone().endOf('month').endOf('week');

    let date = startDay.clone().subtract(1, 'day');

    while (date.isBefore(endDay, 'day')) {
      this.calendar.push({
        days: Array(7).fill(0).map(() => date.add(1, 'day').clone())
      })
    }
  }

  getEvents(day) {
    return this.events.filter(e => moment(e.start).isSame(day, 'days'))
  }

}
