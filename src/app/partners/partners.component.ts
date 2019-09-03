import { ContentfulService } from './../contentful.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partners: any[];

  constructor (private contentful: ContentfulService) { }

  ngOnInit () {
    this.contentful.getPartners().subscribe(partners => this.partners = partners);
  }

}
