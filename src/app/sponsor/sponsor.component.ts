import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {

  @Input() sponsor;

  logo;

  constructor () { }

  ngOnInit () {
    this.logo = `https:${this.sponsor.logo.fields.file.url}`;
  }

}
