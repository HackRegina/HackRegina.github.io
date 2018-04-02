import { Component, OnInit } from '@angular/core'
import { Sponsor } from '../sponsorsPage/sponsor'
import { SponsorsService } from '../sponsorsPage/sponsors.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sponsors: Sponsor[] = []

  constructor (private sponsorsService: SponsorsService) { }

  ngOnInit () {
    this.sponsorsService.find()
      .subscribe((s: Sponsor[]) => this.sponsors = s.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
  }

  getFilteredSponsors (query) {
    return query ? this.sponsors.filter(s => Object.keys(query).every(k => s[k] == query[k])) : this.sponsors
  }

}
