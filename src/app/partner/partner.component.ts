import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  @Input() partner: any;

  logo: string;

  constructor () { }

  ngOnInit () {
    this.logo = `https:${this.partner.logo.fields.file.url}`;
  }

}
