import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../sponsors/sponsor'
import { SponsorsService } from '../sponsors/sponsors.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sponsors: Sponsor[] = []

  constructor(private sponsorsService: SponsorsService) { }

  ngOnInit() {
    this.sponsorsService.find()
      .subscribe((s: Sponsor[]) => this.sponsors = s.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
  }

  getFilteredSponsors(query) {
    return query ? this.sponsors.filter(s => Object.keys(query).every(k => s[k] == query[k])) : this.sponsors
  }

}
